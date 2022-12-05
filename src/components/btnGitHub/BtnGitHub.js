import gitHubIcon from './gitHub-black.svg'

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target='_blank' className='btn-outline' rel='noreferrer'>
            <img src={gitHubIcon} alt='' />
            GitHub repo
        </a>

    );
}

export default BtnGitHub