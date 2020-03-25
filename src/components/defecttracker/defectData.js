import shortid from 'shortid';
const data=[
        { id:shortid.generate(), title: 'Functional', description: 'Submit Button coming to the extreme left', priority:'Two' },
        { id:shortid.generate(), title: 'Sanitory', description: "While Submitting the form data,popup should appear", priority:"One"},
        { id:shortid.generate(), title: 'Regression', description: "Add remove user functionality",priority:"Three"}
    ]

export function defectdata(){
        return data;
}