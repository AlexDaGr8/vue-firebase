<template>
    <div class="container">
        <h1>Add new Contact</h1>
        <form @submit.prevent="saveContact">

            <div class="form-group row">
                <label for="firstname" class="col-2 col-form-label">First Name</label>
                <div class="col-10">   
                    <input type="text" class="form-control" id="firstname" placeholder="First Name" v-model="newContact.firstname">
                </div>
            </div>
            <div class="form-group row">
                <label for="lastname" class="col-2 col-form-label">Last Name</label>
                <div class="col-10">   
                    <input type="text" class="form-control" id="lastname" placeholder="Last Name" v-model="newContact.lastname">
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-2 col-form-label">Eamil Address</label>
                <div class="col-10">   
                    <input type="email" class="form-control" id="email" placeholder="Email Address" v-model="newContact.email">
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="col-2 col-form-label">Phone Number</label>
                <div class="col-10">   
                    <input type="text" class="form-control" id="phone" placeholder="Phone Number" v-model="newContact.phone">
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'new-contact',
    data () {
        return {
            newContact: {
                firstname: null,
                lastname: null,
                email: null,
                phone: null,
                slug: null
            }
        }
    },
    methods: {
        saveContact () {
            this.newContact.slug = this.generateUUID()
            db.contacts.push(this.newContact)
            this.newContact.firstname = null
            this.newContact.lastname = null
            this.newContact.email = null
            this.newContact.phone = null
            this.newContact.slug = null
        },
        generateUUID () {
            let d = new Date().getTime()
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (d + Math.random() * 16) % 16 | 0
                d = Math.floor(d / 16)
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
            })
            return uuid
        }
    }
}
</script>

<style>

</style>
