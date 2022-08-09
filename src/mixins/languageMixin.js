export const languagetMixin = {
    data() {
        return {
            languages: [],
            search_lang: '',
        }
    },
    mounted() {
        this.$axios.get("/languages")
            .then(response => {
                this.languages = response.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    computed: {
        filtered() {
            return this.languages.filter((el) => {
                return el.toUpperCase().match(this.search_lang.toUpperCase());
            })
        }
    }
}