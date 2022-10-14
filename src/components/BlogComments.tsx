import { supabaseServerClient } from '../util/db';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import Login from './Login';

export default function App({ slug }: { slug: string }) {
	const [session, setSession] = useState<Session>(null);

	useEffect(() => {
		// setSession(supabase.auth.api.getUserByCookie());

		supabaseServerClient.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return session ? (
		<div>
			<h2>Welcome</h2>
		</div>
	) : (
		<Login />
	);
}
