import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Ensure you have this Firebase config file
import { collection, addDoc } from "firebase/firestore"; 
import { UserAuth } from '../auth/AuthContext'; // Assuming you have an AuthContext

export default function AddItemPage() {
    const [features, setFeatures] = useState('');
    const [image, setImage] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const { user, role } = UserAuth(); // Context to access user and role

    // Redirect or hide form if not admin
    useEffect(() => {
        if (role !== 'admin') {
            alert('You are not authorized to view this page.');
            // need to implement a redirect here
        }
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (role === 'admin') {
            try {
                const docRef = await addDoc(collection(db, "items"), {
                    features,
                    image,
                    make,
                    model,
                    price: Number(price) // Ensuring price is stored as a number
                });
                console.log("Document written with ID: ", docRef.id);
                // Reset form or show a success message
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            alert('You are not authorized to perform this action.');
        }
    };

    return (
        <div className="cards-container">
            <div className="card">
                    <div className="card-image">
                        <h1>Add New Item</h1>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Features"
                                    value={features}
                                    onChange={e => setFeatures(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={image}
                                    onChange={e => setImage(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    type="text"
                                    placeholder="Make"
                                    value={make}
                                    onChange={e => setMake(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    type="text"
                                    placeholder="Model"
                                    value={model}
                                    onChange={e => setModel(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                />
                                <button type="submit" className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:shadow-outline">Add Item</button>
                            </form>
                            </div>
                            </div>
        </div>
    );
}
