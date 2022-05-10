import InputI0 from '@/components/identification/InputI0.vue'
import ButtonI0 from '@/components/identification/ButtonI0.vue'
import ButtonI1 from '@/components/identification/ButtonI1.vue'
import FooterI from '@/components/identification/FooterI.vue'
export default {
  name: 'inscription1',
  components: {
    InputI0,
    ButtonI0,
    ButtonI1,
    FooterI
  },
  data () {
    return {
      country: '',
      sex: 'male'
    }
  },
  methods: {
    submiting (e) {
      e.preventDefault()
      return false
    },
    countrySelect ({name}) {
      this.country = name
    },
    previous () {
      this.$router.push('inscription')
    }
    ,
    validation () {
      let regex1 = /^[1-9]{1,3}$/
      let regex2 = /^.{2,22}$/
      if (!regex1.test(this.$refs.age.message) ||
                this.$refs.age.message < 12 ||
                this.$refs.age.message > 130
      ) {
        alert('age invalide')
        return false
      }
      if (!regex2.test(this.$refs.pseudo.message)) {
        alert('pseudo invalid or not filled')
        return false
      }
      return true
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
