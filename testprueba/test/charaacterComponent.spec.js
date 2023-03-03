import { shallowMount } from '@vue/test-utils';
import characterC from '@/components/characters.vue';

describe('NuxtLogo', () => {
  let wrapper = shallowMount(characterC)
 beforeEach(()=>{
  wrapper = shallowMount(characterC)

})

test('Snapshot', () => {
  expect(wrapper.vm).toMatchSnapshot()
  
})

  test('Existencia del componente', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.vm)
  })


  test('Array de 8 personajes devuelto', () => {
    const wrapper = shallowMount(characterC,{
        data(){
          return{
            fourCharacters:[
                {id:1,name:'albedo'},
                {id:2,name:'aloy'},
                {id:3,name:'amber'},
                {id:4,name:'arataki-itto'},
                {id:5,name:'ayaka'},
                {id:6,name:'ayato'},
                {id:7,name:'barbara'},
                {id:8,name:'beidou'}
            ],
          }
        }

      })
    console.log( wrapper.vm.$options.data().fourCharacters)

    let lap = wrapper.findAll('li').text();
    expect(lap).toBe('Albedo')
    
  })


})
