import { BiMenuAltRight } from 'react-icons/bi';

interface HeaderProps {
	toggleMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Header = ({ toggleMenu }: HeaderProps) => {
	return (
		<header id="header" className="w-full flex items-center ">
			<a href="/">
				<p className="text-5xl mt-5 ml-5 md:ml-20 font-black block my-auto">
					Lasfito
				</p>
			</a>
			<div
				className={`fixed top-5 right-3  md:mr-20  z-40 menu-icon`}
				onClick={e => toggleMenu(e)}
			>
				<BiMenuAltRight fontSize={40} className="cursor-pointer" />
			</div>
		</header>
	);
};

export default Header;
