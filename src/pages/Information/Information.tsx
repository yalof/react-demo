import React, {useState} from 'react';
import './Information.css';
import HeaderMenu from '../../components/HeaderMenu';
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import Button from '../../components/Button';


const Information = () => {
    const {theme, onChangeTheme = () => {}} = useThemeContext();
    const isLightTheme = theme ===Theme.Light;

    const [tabName,setTabName] = useState(1)
const activeTab = (index: any) => {
setTabName (index)
}
    return (
      <div className={classNames( {['info-wrapper']:isLightTheme}, {[' info-wrapper dark'] : !isLightTheme})}>
        <div className='info-wrap'>
            <div className='info-title'>Information</div>
          <div className='btnsInfo'>
        <Button className={tabName === 1 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 1' onClick={()=>activeTab(1)}/>
        <Button className={tabName === 2 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 2' onClick={()=>activeTab(2)}/>
        <Button className={tabName === 3 ? 'btnInfo active-tabs': 'btnInfo'} btnText='Tab 3' onClick={()=>activeTab(3)}/>
          </div>
          <div className='info-content-wrapper'>
<p className={tabName === 1 ? 'info-content active-content': 'info-content'}> 
Это последний раунд и выбор не велик, <br/>
Но джебы точны, будто бы их выбрал ювелир.<br/>
</p>
<p className={tabName === 2 ? 'info-content active-content': 'info-content'}>
Тени не исчезают в полдень, хроники врут,<br/>
Первым падает тот, кто на словах вроде бы крут.<br/>
</p>
<p className={tabName === 3 ? 'info-content active-content': 'info-content'}>
Самое время собрать всю свою волю в кулак,<br/>
Вам не удастся во мне запугать болью талант,<br/>
Дать бой своим недостаткам - это дать бой системе,<br/>
Если в твоём сердце есть место свету, не бойся тени!<br/>
</p>
          </div>
        </div>
    </div>
    )
}

export default Information;