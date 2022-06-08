import { Circle ,Popup} from "react-leaflet";

const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };
  

export const Sortdata = (data) =>{
    const sorteddata = [...data];
    sorteddata.sort((a,b)=>{
        if(a.cases>b.cases){
           return -1;
        }else{
           return 1
        }
    })
    return sorteddata;
}

// Draw the circle on map
export const showDataOnMap =(data,casesType='cases')=> {
    console.log('showDataOnMapdata===>+++',data[0],data[1]);

   

               
                <Circle center={[data[0]?data[0]:data.lat,data[1]?data[1]:data.lng]}
                fillOpacity={0.4}  
                color={'#7dd71d'} radius={70}

                fillColor={'#7dd71d'}>
                    <Popup>

                    </Popup>
                 </Circle>


               
           
    
}
