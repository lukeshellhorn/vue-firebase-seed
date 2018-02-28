<template>
  <div id="thing-route">
    <div class="row lgd-title">
      <div class="col-md-12 text-center">
        <h1 v-if="!toLoadId">New Thing</h1>
        <h1 v-else="!toLoadId">Existing Thing</h1>
      </div>
    </div>
    <div class="row warning-row">
      <div class="col-md-12">
        <span v-if="successMsg" class="text-success lgd-msg"><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{{successMsg}}</span>
        <span v-if="errorMsg" class="text-danger lgd-msg" style="padding-right: 10px;"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;{{errorMsg}}</span>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-12 text-right">
        <button type="button" class="btn btn-secondary" v-on:click="cancel(thing)"><i class="fa fa-times-circle" aria-hidden="true"></i>&nbsp;Cancel &amp; Exit</button>
        <button type="button" class="btn btn-primary" v-on:click="saveThing(thing, true)"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Save &amp; Exit</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <h3 class="lgd-form-heading">Thing Information</h3 class="lgd-form-heading">

        <!--  -->
        <div class="row form-group">
          <div class="col-md-4 text-right">
            <label>Name</label>
          </div>
          <div class="col-md-6 col-md-offset-2 text-left">
              <input v-model="thing.name" class="form-control" type="text">
          </div>       
        </div>
        <!--  -->
        <div class="row form-group">
          <div class="col-md-4 text-right">
            <label>Description</label>
          </div>
          <div class="col-md-6 col-md-offset-2 text-left">
              <input v-model="thing.desc" class="form-control" type="text">
          </div>       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../firebase'
export default {
  name: 'thing',
  created: function () {
    this.resetMessages();
    
    this.toLoadId = null;
    if (!this.$route.params.id) {
      this.thing = {};
    } else {
      this.toLoadId = this.$route.params.id.toString();
      db.ref().child('things/' + this.toLoadId).once('value')
      .then(this.loadSuccess, this.loadError);
    }
  },
  data() {
    return {
     	thing: {}, // object of key/val pairs
      errorMsg: '',
      successMsg: ''
    }
  },
  methods: {
    saveThing (thing, leaveAfterSave) {
      this.resetMessages();
      // TODO setup other meta fields.
      this.update(thing, leaveAfterSave);
    },
    validFormInput(thing) {
      let toReturn = true;
      var requiredFields = [
        'name',
        'desc',
      ]
      for (var i = 0; i < requiredFields.length; i++){
          toReturn = toReturn && thing[requiredFields[i]];
      }

      return toReturn;
    },
    update (thing, toRoute) {
      this.resetMessages();

      // validation 
      if (!this.validFormInput(thing)) {
        this.errorMsg = 'Please fill in all required fields.';
        return;
      }

      let toUpdate = {};
      if (!this.toLoadId){
        let refKey = db.ref().child('things').push().key;
        toUpdate['things/' + refKey] = thing;
        this.toLoadId = refKey;
        this.$router.replace(refKey);
      } else {
        toUpdate['things/' + this.toLoadId] = thing;
      }
      if (toRoute){
        db.ref().update(toUpdate).then(this.saveSuccessExit, this.saveFail);
      } else {
        db.ref().update(toUpdate).then(this.saveContSuccess, this.saveFail);
      }
    },
    saveAndCont (thing) {
      this.saveThing(thing, false);
    },
    saveAndExit (thing) {
      this.saveThing(thing, true);
    },
    cancel () {
      this.$router.push({name: 'things'});
    },
    saveContSuccess() {
      this.successMsg = 'Your Save Was Successful';
    },
    saveSuccessExit(){
      this.successMsg = 'Your Save Was Successful';
      this.$router.push({name: 'things'});
    },
    saveFail(error) {
      this.successMsg = '';
      this.errorMsg = 'Something went wrong with your save';
    },
    loadSuccess (success) {
      this.thing = success.val();
    },
    loadError(error) {
      this.successMsg = '';
      this.errorMsg = 'There was a problem loading your thing.';
    },
    resetMessages() {
      this.errorMsg = '';
      this.successMsg = '';
    }
  }
}
</script>

<style lang="scss">
#thing-route{
  .warning-row {
    text-align: center;
    min-height: 40px;
  }
  label {
    font-weight: 500;
    font-size: 20px;
  }
  label:after {
    content: ': '
  }
  .lgd-form-heading {
    padding-bottom: 20px;
  }
  .lgd-msg {
    font-size: 20px;
    padding-right: 10px;
  }
}
</style>