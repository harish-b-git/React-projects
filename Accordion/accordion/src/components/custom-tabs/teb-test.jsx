import Tabs from "./tabs";
import './tabs.css'

function RandomContent(){

    return<h2>Some Random Content</h2>
}

export default function TabTest(){

    const tabs = [
        {
            label : 'Tab 1',
            content : <h4>This is content for Tab 1....</h4>
        },
        {
            label : 'Tab 2',
            content : <div><h3>This is content for Tab 2..</h3></div>
        },
        {
            label : 'Tab 3',
            content : <RandomContent />
        }
    ]
    function handleChange(currentTabIndex){
console.log(currentTabIndex);
    }
    
    return<Tabs tabsContent={tabs} onChange={handleChange}/>
}