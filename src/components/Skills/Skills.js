import React from 'react';
import '../../styles/global.css';
import './Skills.css';
import Tag from '../Tag/Tag';

const Skills = () => {
    return (
        <div id="skills" className="skills container tc">
            <h1>Skills</h1>

            <ul>
                <li>
                    <h2 className="skills__subheading">Frontend</h2>
                    <div className="skills__tag-row">
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                        <Tag>SASS</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>TypeScript</Tag>
                        
                    </div>
                    <div className="skills__tagRow">
                        <Tag>React</Tag>
                        <Tag>Angular</Tag>
                        <Tag>RxJS</Tag>
                    </div>

                </li>
                <li>
                    <h2 className="skills__subheading">Backend</h2>
                    <div className="skills__tagRow">
                        <Tag>C#</Tag>
                        <Tag>JavaScript</Tag>
                    </div>
                    <div className="skills__tagRow">
                        <Tag>ExpressJS</Tag>
                        <Tag>ASP.NET</Tag>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Skills;