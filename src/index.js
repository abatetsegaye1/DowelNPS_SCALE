import App from "./App"
import "./index.scss"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Brads Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    state: { scaleOrientation: '', 
             row:true,
             emoji:true,
             btnbg:'',
             btncolr:'',
    color: {btnColor:'',btnBgcolor:'', fntColor:'', sclColor:'',confgrFontColor:''},
    scale:{format:'',width:'',height:'',lblLeft:'unlikely',lblCenter:'likely',lblRight:'most likely',sclRangefromA:'',sclRangetoB:'',title:'Help us improve!',question:'How would you rate it?'}
    }
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
})

function EditComponent({setAttributes}) {

  return <App setAttributes={setAttributes}/>
}
