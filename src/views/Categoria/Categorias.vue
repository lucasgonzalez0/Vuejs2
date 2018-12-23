<template>
    <div>
       
        <cmp-cate-form></cmp-cate-form>    
        <CategoriaLista></CategoriaLista>
         
         
    </div>
</template>

<script>
import CategoriaLista from '@/components/Categoria/CategoriaLista'
import CmpCateForm from '@/components/Categoria/CmpCateForm'
    export default {
        components: {
            CategoriaLista, CmpCateForm
        }
        
    }
</script>

<style scoped>

</style>