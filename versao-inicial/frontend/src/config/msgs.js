import Vue from "vue";
import ToastedPlugin from "vue-toasted";

Vue.use(ToastedPlugin, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operation successfully completed!': payload.msg,
    { type: 'success', icon: 'check'}
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'An unexpected error occurred': payload.msg,
    { type: 'error', icon: 'times'}
)

