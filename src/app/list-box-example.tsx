"use client"
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {useState} from 'react'

const people = [
    {id: 1, name: 'Durward Reynolds'},
    {id: 2, name: 'Kenton Towne'},
    {id: 3, name: 'Therese Wunsch'},
    {id: 4, name: 'Benedict Kessler'},
    {id: 5, name: 'Katelyn Rohan'},
]

export function ListBoxExample() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    return (
        <Listbox  value={selectedPerson} onChange={setSelectedPerson}>
            <ListboxButton className="border border-gray-300 py-1 px-2 max-w-40 mx-auto">{selectedPerson.name}</ListboxButton>
            <ListboxOptions anchor="bottom">
                {people.map((person) => (
                    <ListboxOption key={person.id} value={person} className="data-focus:bg-blue-100">
                        {person.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}