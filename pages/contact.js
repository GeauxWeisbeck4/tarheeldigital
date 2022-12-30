import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <Link href="/">Home</Link>
            <div>
                <label for="name">Name (4 to 8 characters)</label>
                <input for="name" id="name" name="name" required minLength="4" maxLength="32" size="20"></input>
            </div>
        </div>
    )
}