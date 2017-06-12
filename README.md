# Tabs-JS-Demo

Табы на чистом JS c настройками:

#### Использование
Вызов табов.
```sh
tabs.init();
```

#### Настройки
По умолчанию классы для табов следующие:
| Название класса | Его назначение |
| ------ | ------ |
| "tabs-nav-link" | Класс ссылки в табах, используется для их переключения
| "c-tab" | Собственно сам таб / контейнер для содержимого
| "active-link" | Класс активной ссылки на таб
| "is-active" | Класс активного таба

Настройка табов
```sh
tabs.init({
    links: Ваш класс здесь
    tabs: Ваш класс здесь
    activeLink: Ваш класс здесь
    activeTab: Ваш класс здесь
});
```


#### Структура HTML
```sh
<!-- контейнер для табов -->
<div class="tabs">
   
   <!-- навигация для табов -->
	<ul class="tabs-nav">
	    <li><a class="tabs-nav-link active-link">Описание</a></li>
	    <li><a class="tabs-nav-link">Характеристики</a></li>
	    <li><a class="tabs-nav-link">Комментарии</a></li>
	</ul>
		
    <!-- контент для табов -->
	<div class="tabs-content">
		<!-- Собственно сам таб / с активным классом-->
		<div class="c-tab is-active">
		    здесь вы можете разместить любой контент
		</div>
		<div class="c-tab">
		    здесь вы можете разместить любой контент
		</div>
    	</div>
</div>
```

