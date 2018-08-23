<template>
    <div class="container">
        <h1 class="text-center">View Contact</h1>
        <div class="row">
            <div class="col-6 offset-3 text-center">
                <p><strong>Name: </strong>{{contact.firstname}} {{contact.lastname}}</p>
                <p><strong>Email: </strong>{{contact.email}}</p>
                <p><strong>Phone: </strong>{{contact.phone}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-contact',
    data () {
        return {
            contact: {
                firstname: null,
                lastname: null,
                email: null,
                phone: null,
            }
        }
    },
    mounted () {
        db.contacts.orderByChild('slug').equalTo(this.$route.params.person)
            .on('value', data => {
                var key = Object.keys(data.val());
                var data = data.val()[key];
                this.contact.firstname = data.firstname
                this.contact.lastname = data.lastname
                this.contact.email = data.email
                this.contact.phone = data.phone
            });
    },
    // firebase: () => {
    //     var cntct = db.contacts.orderByChild('slug').equalTo(this.$route.params.person)
    //         .on('value', data => {
    //             var key = Object.keys(data.val());
    //             var data = data.val()[key];
    //             return data;
    //         });
    //     return {
    //         contact: cntct
    //     }
    // }
}
</script>

<style>

</style>
