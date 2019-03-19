import Card from './components/Card_move';
import Normal from './components/Normal_move';

const components = [Card, Normal];
const plugin = {
    install: (Vue) => {
        components.map(comp => Vue.component(comp.name, comp));
    },
    Card,
    Normal
}
if (typeof window !=='undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;