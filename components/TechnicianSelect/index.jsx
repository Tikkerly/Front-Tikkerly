export default function TechnicianSelect({ technicians, handleChange }) {
    if (!technicians) return (<></>)
    return (
        <div className='flex mb-4 w-5/6 bg-gray-200 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md justify-between'>
            <div className="flex items-center ">
                <h2 className='flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0'>Buscar tickets por técnico:</h2>
            </div>
            <div className="flex items-center">
                <select onChange={handleChange} className="font-black avant-garde-regular text-Az1 text-xl">
                    <option value="default" className="font-regular avant-garde-regular text-Az1">Todos los técnicos</option>
                    {technicians.map(technician => {
                        return (
                            <option
                                key={technician._id}
                                value={technician._id}>
                                {technician.username}
                            </option>
                        )
                    })}
                </select>
            </div>

        </div>
    )
}