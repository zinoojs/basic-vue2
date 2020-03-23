<template>
    <div>
         
        <form action="">                
          <div class="row">
            <div class="col-xs-12">                          
              <h3>Hello Form Test</h3>
              <hr>
            
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model.lazy="formdatas.name">
                {{ formdatas.name }}
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" class="form-control" id="lastname" v-model="formdatas.lastname" >
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" id="subject" v-model="formdatas.subject">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="3" class="form-control" v-model="formdatas.message"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <input type="checkbox" name="message" id="message" value="Message" v-model="formdatas.extras">
                <label for="texting">Texting</label>
                <input type="checkbox" name="texting" id="texting" value="Texting" v-model="formdatas.extras">
                {{ formdatas.extras }}
            </div>
            <div class="form-group">
                <label for="male">Male
                <input type="radio" name="male" value="male" id="male" v-model="formdatas.gender">
                </label>
                <label for="female">FeMale
                <input type="radio" name="female" id="female" value="female" v-model="formdatas.gender">
                </label>
            </div>
            <div class="form-group">
                <label for="country">Country</label>
                <select name="country" id="country" class="form-control" v-model="formdatas.country">
                    <option v-for=" ( country, index ) in countries " :key="index">
                        {{ country }}
                    </option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submit">Submit</button>
            </div>     
          </div>
        </form>
     
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [
                "USA","UK","MYANMAR","INDIA"
            ],
            formdatas : {
                name: '',
                lastname: 'eg.mama',
                subject: '',
                message: 'some data',
                extras: [],
                gender: 'female',
                country: "UK"
            }
        }
    },
    methods: {
        submit() {
            console.log(this.formdatas);
            console.log( JSON.stringify( this.formdatas ) );
            
        }
    }
}
</script>

<style scoped>
  .container {
    min-height: 84vh;
    text-align: center;
  }
</style>
