<script setup>
import { createPotions, deletePotion, getPotions } from '../api/potions';
</script>
<script>
    export default{
        name: "PotionDashBoard",
        data(){
            return{
                potions:[],
                newPotion:{
                    name:"",
                    effect:"",
                    isDangerous:false
                },
                selectedPotion:{
                    id: -1,
                    name:"",
                    effect:"",
                    isDangerous:false
                },
            }
        },

        mounted(){
            this.loadPotions();
        },
        methods:{
            async loadPotions(){
                this.potions=await getPotions();
            },
            async submitCreatePotions(){
                await createPotions(this.newPotion)
            },
            async deletePotion(){
                await deletePotion(this.potion)
            },
            
        }
    }
</script>
<template>
    <main>
        <h1>Potions Managment Dashboard</h1>
        <form @submit.prevent="submitCreatePotions()">
            <label for="name">Name: </label>
            <input type="text" name="name">
            <label for="effect">Effect: </label>
            <input type="text" name="effect">
            <label for="isDangerous">is it dangerous?</label>
            <input type="checkbox" name="isDangerous">

            <button type="submit"></button>
        </form>
    </main>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Effect</th>
                <th>IsDangerous</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="potion in potions" :key="potion.id">
                <td>{{ potion.name }}</td>
                <td>{{ potion.effect }}</td>
                <td>{{ potion.isDangerous ? "Veszélyes": "nem veszélyes" }}</td>
            </tr>
        </tbody>
    </table>
</template>