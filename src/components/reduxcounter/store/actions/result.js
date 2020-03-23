import * as actionTypes from './actionTypes';


export const storeResults= res=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(saveResults(res))
        },10)
    }
}
export const storeDoubleResults=res=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(saveDoubleResults(res))
        },1000)
    }
}
export const storeTripleResults=res=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(saveTripleResults(res))
        },1000)
    }
}
export const deleteResults=(resId)=>{
    return{
        type:actionTypes.DELETE,
        resultsId:resId
    }
}

export const saveResults=res=>{
    return{
        type:actionTypes.STORE,
        result:res
    }
}
export const saveDoubleResults=res=>{
    return{
        type:actionTypes.DOUBLESTORE,
        resultDouble:res
    }
}
export const saveTripleResults=res=>{
    return{
        type:actionTypes.TRIPLESTORE,
        resultTriple:res
    }
}