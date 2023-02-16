import { useState } from 'react';
import { AcercaHero } from '../AcercaHero';
import { Reclutador } from '../Reclutador';

const AcercaPag = () => {
	const [visitante, setVisitante] = useState<'reclutador' | 'perdido'>(
		'perdido'
	);

	return (
		<>
			<AcercaHero setVisitante={setVisitante} />
			{visitante === 'reclutador' ? <Reclutador /> : null}
		</>
	);
};

export default AcercaPag;
