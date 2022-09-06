import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='left'>
                <a href="#" className='logo'>
                    <img src="./img/logo.svg" alt="logo" />
                    <a href="#">LearnEnglish</a>
                </a>
            </div>
            <div className='right'>
                <button>Click me</button>
                <button>Login</button>
                <button>Register</button>
            </div>
            <nav>
                <ul>
                    <li className='navDrop'>
                        <a href="">Home</a>
                    </li>
                    <li className='navDrop'>
                        <a href="">Online Courses</a>
                        <ul className='dropMenu'>
                            <li>
                                <a href="">Live online classes</a>
                            </li>
                            <li>
                                <a href="">Self-study online courses</a>
                            </li>
                            <li>
                                <a href="">Personal online tutoring</a>
                            </li>
                            <li>
                                <a href="">IELTS online courses</a>
                            </li>
                        </ul>
                    </li>
                    <li className='navDrop'>
                        <a href="">Skills</a>
                        <ul className='dropMenu'>
                            <li>
                                <a href="">Listening</a>
                            </li>
                            <li>
                                <a href="">Reading</a>
                            </li>
                            <li>
                                <a href="">Writing</a>
                            </li>
                            <li>
                                <a href="">Speaking</a>
                            </li>
                        </ul>
                    </li>
                    <li className='navDrop'>
                        <a href="">Grammar</a>
                        <ul className='dropMenu'>
                            <li>
                                <a href="">A1-A2 grammar</a>
                            </li>
                            <li>
                                <a href="">B1-B2 grammar</a>
                            </li>
                            <li>
                                <a href="">English grammar reference</a>
                            </li>
                        </ul>
                    </li>
                    <li className='navDrop'>
                        <a href="">Vocabulary</a>
                        <ul className='dropMenu'>
                            <li>
                                <a href="">A1-A2 vocabulary</a>
                            </li>
                            <li>
                                <a href="">B1-B2 vocabulary</a>
                            </li>
                            <li>
                                <a href="">Vocabulary games</a>
                            </li>
                        </ul>
                    </li>
                    <li className='navDrop'>
                        <a href="">Community</a>
                        <ul className='dropMenu'>
                            <li>
                                <a href="">Community events</a>
                            </li>
                            <li>
                                <a href="">LearnEnglish webinars</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
