import dayjs from "dayjs"
import reletiveTime from "dayjs/plugin/relativeTime"

dayjs.extend(reletiveTime);

const formateReletiveTime = (date)=>{
    return dayjs(date).fromNow();
};

export default formateReletiveTime;
