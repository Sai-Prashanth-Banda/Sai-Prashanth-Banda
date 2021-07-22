import React from 'react';
const Newslist=(props)=>{
    console.log(props)
    const renderList=props.datalist.map((data)=>{
        return(
            <div>
                <h4> {data.title}</h4>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <div>
            {
                renderList
            }
        </div>
    )
        }
export default Newslist;