export const languagetMixin = {
    data() {
        return {
            languages: ['Türkçe', 'İngilizce', 'Almanca', 'Rusça', 'Türkçe', 'İngilizce', 'Almanca', 'Rusça', 'Türkçe', 'İngilizce', 'Almanca', 'Rusça'],
            search_lang: '',
        }
    },
    computed: {
        filtered() {
            return this.languages.filter((el) => {
                return el.toUpperCase().match(this.search_lang.toUpperCase());
            })
        }
    }
}