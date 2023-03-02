import { shallowMount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('NuxtLogo', () => {
  let wrapper = shallowMount(indexPage)
 beforeEach(()=>{
  wrapper = shallowMount(indexPage)

})

test('xEistencia del componente', () => {
  expect(wrapper.vm).toMatchSnapshot()
  
})

  test('Existencia del componente', () => {
    expect(wrapper.vm).toBeTruthy()
    
  })


  test('Index Texts', () => {
    const textone = wrapper.find('h2').text();
    const textwoo = wrapper.find('p').text();

    expect(textone).toBe('¡Choose the right character of genshin Impact!')

    expect(textwoo).toBe('App by Javier Garcia Urruchi.')
  })
})
