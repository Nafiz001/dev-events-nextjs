'use client';

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CreateEventForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        overview: '',
        venue: '',
        location: '',
        date: '',
        time: '',
        mode: 'offline',
        audience: '',
        organizer: '',
        tags: '',
        agenda: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const form = new FormData();
            
            // Add all text fields
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'tags' || key === 'agenda') {
                    // Convert comma-separated strings to JSON arrays
                    const arrayValue = value.split(',').map(item => item.trim()).filter(Boolean);
                    form.append(key, JSON.stringify(arrayValue));
                } else {
                    form.append(key, value);
                }
            });

            // Add image file
            const fileInput = fileInputRef.current;
            if (fileInput?.files?.[0]) {
                form.append('image', fileInput.files[0]);
            } else {
                throw new Error('Please select an image');
            }

            const response = await fetch('/api/events', {
                method: 'POST',
                body: form,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to create event');
            }

            router.push('/');
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-event-form">
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <div className="form-grid">
                {/* Title */}
                <div className="form-group full-width">
                    <label htmlFor="title">Event Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., React Summit 2026"
                    />
                </div>

                {/* Description */}
                <div className="form-group full-width">
                    <label htmlFor="description">Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Brief description of your event"
                    />
                </div>

                {/* Overview */}
                <div className="form-group full-width">
                    <label htmlFor="overview">Overview *</label>
                    <textarea
                        id="overview"
                        name="overview"
                        value={formData.overview}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Detailed overview of what attendees can expect"
                    />
                </div>

                {/* Image Upload */}
                <div className="form-group full-width">
                    <label htmlFor="image">Event Image *</label>
                    <div className="image-upload">
                        <input
                            ref={fileInputRef}
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                        {imagePreview && (
                            <div className="image-preview">
                                <Image src={imagePreview} alt="Preview" width={300} height={200} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Venue */}
                <div className="form-group">
                    <label htmlFor="venue">Venue *</label>
                    <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Tech Conference Center"
                    />
                </div>

                {/* Location */}
                <div className="form-group">
                    <label htmlFor="location">Location *</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="e.g., San Francisco, CA, USA"
                    />
                </div>

                {/* Date */}
                <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Time */}
                <div className="form-group">
                    <label htmlFor="time">Time *</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Mode */}
                <div className="form-group">
                    <label htmlFor="mode">Event Mode *</label>
                    <select
                        id="mode"
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        required
                    >
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>

                {/* Audience */}
                <div className="form-group">
                    <label htmlFor="audience">Target Audience *</label>
                    <input
                        type="text"
                        id="audience"
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Developers, Designers"
                    />
                </div>

                {/* Organizer */}
                <div className="form-group full-width">
                    <label htmlFor="organizer">Organizer *</label>
                    <input
                        type="text"
                        id="organizer"
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleChange}
                        required
                        placeholder="Organization or person organizing the event"
                    />
                </div>

                {/* Tags */}
                <div className="form-group full-width">
                    <label htmlFor="tags">Tags * (comma-separated)</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        required
                        placeholder="e.g., React, JavaScript, Frontend"
                    />
                </div>

                {/* Agenda */}
                <div className="form-group full-width">
                    <label htmlFor="agenda">Agenda * (comma-separated)</label>
                    <textarea
                        id="agenda"
                        name="agenda"
                        value={formData.agenda}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="e.g., Registration and Welcome, Keynote Speech, Workshop Session, Networking Break"
                    />
                </div>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Creating Event...' : 'Create Event'}
            </button>
        </form>
    );
};

export default CreateEventForm;
