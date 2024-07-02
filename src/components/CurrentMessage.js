import Weekdays from "./Weekdays";
import Weekends from "./Weekends"

function CurrentMessage(props) {

   const weekday = (props.day >= 1 && props.day <= 5);
   const weekend = (props.day >=6 && props.day <= 7);
   let imgUrl = "https://picsum.photos/200/300";

   let message;

   if (weekday) {
        message = <Weekdays/>
   } else if (weekend) {
        message = <Weekends/>
   }

   return (
        <div>
            {message}
            <img src={imgUrl} alt="random image"/>
        </div>
   )

}

export default CurrentMessage;