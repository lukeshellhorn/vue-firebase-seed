<template>
  <div id="things-route">
    <div class="row lgd-title">
      <div class="col-md-12 text-center">
        <h1>List of Things View</h1>
      </div>
    </div>
    <div v-if="isLoaded">
      <div class="row action-row"> 
        <div class="col-md-12 text-left">
          <button v-on:click="navToNewThing()">New Thing</button>
        </div>
      </div>
      <div v-if="!errorMsg">
        <div class="row"> 
          <div class="col-md-12">
            <table class="table">
              <thead class="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, key) in things" v-on:click="navToExistingThing(key)">
                  <td>{{key}}</td>
                  <td>{{value.name}}</td>
                  <td>{{value.desc}}</td>
                  <td><i class="fa fa-times" v-on:click.stop.replace="deleteThing(key)"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-md-12 text-center lgd-main-form">
          <h3>{{errorMsg}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../firebase'
export default {
  name: 'things',
  data() {
    return {
      things: null,
      errorMsg: '',
      isLoaded: false
    }
  },
  created() {
    console.log('created', this.things);

    this.getData();
  },
  methods: {
    getData () {
      this.errorMsg = '';
      var dbRef = db.ref().child('/things');
      dbRef.on('value', this.getDataSuccess);
    },
    getDataSuccess(snap) {
      this.isLoaded = true;
      if (_.isEmpty(snap.val())) {
        this.errorMsg = 'You don\'t have any things yet. Click the \'New Thing\' button to create one.';
      }
      
      this.things = snap.val();
    }, 
    navToNewThing () {
      this.$router.push({name: 'newThing'});
    },
    navToExistingThing (thingId) {
      this.$router.push({name: 'thing', params:{id:thingId}});
    },
    deleteThing(thingId) {
      db.ref().child('/things/' + thingId).remove();
      this.getData();
    }
  }
}
</script>

<style lang="scss">
#things-route{
  table {
    margin-top: 0;
    margin-bottom: 30px;
    table-layout: fixed;
    word-wrap: break-word;
    th {
      border-color: #666666;
    }
    td {
      border-top-color:  #666666;
    }
    tbody > tr {
      cursor: pointer;
    }
    tbody > tr:hover {
      background-color: #666666;
      color: white;
    }
  }
  .lgd-main-form {
    padding: 20px;
  }
  .action-row {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .fa:hover {
    color: red;
  }
}
</style>