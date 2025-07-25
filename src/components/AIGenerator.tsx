import React, { useState } from 'react';
import axios from 'axios';

const AIGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState('model2');
  
    const modelEndpoints: { [key: string]: string } = {
      model1: "model1",
      model2: "model2"
    };
  
    const handleGenerate = async () => {
      if (!prompt) return;
      setLoading(true);
      setImage(null);
  
      try {

        const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
        /* const BASE_URL = 'https://huggingface.co/spaces/Pacicap/stable_diffusion_api'; */

        const response = await axios.post(
          `${BASE_URL}/generate`,
          {
            prompt,
            model: modelEndpoints[selectedModel],
          },
          { responseType: 'blob' }
        );

        /*

        const response = await axios.post(
          'http://127.0.0.1:8000/generate', // your FastAPI backend
          {
            prompt,
            model: modelEndpoints[selectedModel],
          },
          { responseType: 'blob' }
        );

        */

        const imageURL = URL.createObjectURL(response.data);
        setImage(imageURL);
      } catch (error) {
        console.error(error);
        alert('Error generating image. Please try again.');
      }
  
      setLoading(false);
    };
  
    return (
      <div className="text-center p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Furniture Image Generator with Stable Diffusion </h2>
  
        {/* Prompt Input */}
        <input
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
        />
  
        {/* Model Selection */}
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full p-2 border rounded mb-4 bg-white text-black"
        >
          <option value="model1">Model 1 – Fine-Tunned Stable Diffusion 2.1 with Claude dataset</option>
          <option value="model2">Model 2 – Fine-Tunned Stable Diffusion 2.1 with gpt4o dataset</option>
        </select>
  
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate
        </button>
  
        {loading && <p className="mt-4">Generating image...</p>}
  
        {image && (
          <div className="mt-6">
            <img src={image} alt="Generated Art" className="rounded shadow-lg max-w-full" />
          </div>
        )}
      </div>
    );
  };
  
  export default AIGenerator;
