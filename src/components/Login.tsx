import { useState } from 'react';
import { supabaseServerClient } from '../util/db';

export default function Login() {
	const [email, setEmail] = useState('');

	const handleLogin = async (email: string) => {
		try {
			const { error } = await supabaseServerClient.auth.signIn({ email });
			console.log('sending magic link to: ' + email);

			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};

	return (
		<div>
			<p className="mb-4">Sign in via magic link with your email below</p>
			<input
				type="email"
				placeholder="Your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					handleLogin(email);
				}}
			>
				<span>Send magic link</span>
			</button>
		</div>
	);
}
