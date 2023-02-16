import React from 'react';

interface ClientOnlyProps {
	children: React.ReactNode;
}

export default function ClientOnly({
	children,
	...delegated
}: ClientOnlyProps) {
	const [hasMounted, setHasMounted] = React.useState(false);
	React.useEffect(() => {
		setHasMounted(true);
	}, []);
	if (!hasMounted) {
		return null;
	}
	return <div {...delegated}>{children}</div>;
}
