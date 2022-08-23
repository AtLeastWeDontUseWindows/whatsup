import { format } from 'date-fns'
import { DataObject } from '../App';

interface CardProps {
  data: DataObject;
}

const Card = ({ data }: CardProps) => {
  return (
    <div class="flex bg-slate-200 basis-1/4 m-auto my-6 w-2/5 rounded overflow-hidden shadow-md">
      <div class="flex justify-center flex-col w-full">
        <div class="bg-cover bg-no-repeat bg-center w-full h-2/4 pb-60 basis-2/4" style={`background-image: url(${data.image})`}></div>
        <div class="flex basis-2/4 flex-col justify-between">
          <div class="content flex items-start flex-col p-6">
            <h2 class="font-bold text-3xl mb-2">{data.title}</h2>
            <p class="text-left">{data.description}</p>
            <p>{format(data.time, 'eeee do k:mm')}</p>
            <p>{data.location}</p>
          </div>
          <div class="flex flex-row justify-between p-6">
            <button class="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Attend
            </button>
            <button class="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Cant Attend
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;