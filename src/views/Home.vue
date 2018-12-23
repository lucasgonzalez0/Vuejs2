<template>
    <div class="home">
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <v-card>
                <v-toolbar>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                </v-toolbar>
                <v-card-text style="height: 300px;" class="grey lighten-5"></v-card-text>
                <v-card-text style="height: 100px; position: relative">
                    <v-btn
                    absolute
                    dark
                    fab
                    top
                    right
                    color="pink"
                    >
                    <v-icon>add</v-icon>
                    </v-btn>
                </v-card-text>
                </v-card>
            </v-flex>
            </v-layout>
         </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>