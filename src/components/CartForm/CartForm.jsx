import './CartForm.css'

export default function CartForm(){
    return(
        <div class="cart__form">
                        <h4 class="cart__form-title">
                            Оформление заказа
                        </h4>
                        <div class="cart__form-body">
                        <div class="cart__form-row">
                        <div class="cart__form-column">
                            <form action="" class="cart__form-form">
                                <label>
                                Физ. лицо
                                <input class="cart__form-checkbox" type="radio" name="personType" value="fiz" onchange="toggleFormRadio(this)"/>
                                </label>
                                <span class="cart__form-span cart__form-span--disabled">ФИО</span>
                                <input type="text" placeholder="Иванов Павел Сергеевич" name="fio" disabled=""/>
                                <span class="cart__form-span cart__form-span--disabled">Почта</span>
                                <input type="text" placeholder="1256@mail.ru" name="email" disabled=""/>
                                <span class="cart__form-span cart__form-span--disabled">Телефон</span>
                                <input type="text" placeholder="8-310-00-00" name="phone" disabled=""/>
                            </form>
                            </div>
                            <div class="cart__form-column">
                            <form action="" class="cart__form-form">
                                <label>
                                    Юр. Лицо
                                    <input class="cart__form-checkbox" type="radio" name="personType" value="jur" onchange="toggleFormRadio(this)"/>
                                </label>
                                <span class="cart__form-span cart__form-span--disabled">ИНН (автозаполнение)</span>
                                <input type="text" placeholder="******" name="inn" disabled=""/>
                                <span class="cart__form-span cart__form-span--disabled">Компания</span>
                                <input type="text" placeholder="******" name="company" disabled=""/>
                                <span class="cart__form-span cart__form-span--disabled">КПП</span>
                                <input type="text" placeholder="******" name="kpp" disabled=""/>
                                <span class="cart__form-span cart__form-span--disabled">Юр. адрес</span>
                                <input type="text" placeholder="******" name="address" disabled=""/>
                            </form>
                            </div>
                            </div>
                            <div class="cart__form-row disabled">
                                <h4 class="cart__form-title">
                                    Доставка
                                </h4>
                                <div class="cart__form-column">
                                    <span>Город</span>
                                    <input id="city" type="text" placeholder="Москва" disabled=""/>
                                </div>
                                <span>Способ получения</span>
                                <div class="cart__form-columnRow">
                                    <div class="cart__form-columnColumn">
                                        <label>
                                            Пункт выдачи
                                            <input class="cart__form-checkbox" type="radio" name="pickupPoint" value="place"/>
                                        </label>
                                        <button class="cart__form-columnColumn-button">
                                            Карта
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="#CE3E28"></path>
                                            </svg>
                                        </button>
                                        <div class="cart__form-map hide">
                                            <div class="cart__form-map-map">

                                            </div>
                                            <div class="cart__form-map-content">
                                                <span class="cart__form-map-contentTitle">Выбранный пункт выдачи</span>
                                                <span class="cart__form-map-contentStreet">улица Березовская, 101</span>
                                                <span class="cart__form-map-contentSumm">450 руб</span>
                                                <button class="cart__form-map-contentButton">Выбрать другой<br/>пункт выдачи</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart__form-columnColumn">
                                        <label>
                                            Курьером
                                            <input class="cart__form-columnColumn-checkbox" type="radio" name="pickupPoint" value="courier"/>
                                        </label>
                                        <span class="cart__form-adres">Мой адрес</span>
                                        <input class="cart__form-adresInput" type="text" placeholder="Введите значение" disabled=""/>
                                        <div class="cart__form-columnInputs">
                                            <input type="text" placeholder="дом" disabled=""/>
                                            <input type="text" placeholder="подъезд" disabled=""/>
                                            <input type="text" placeholder="квартира" disabled=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="cart__form-title sbp">
                                Оплата
                            </h4>
                            <div class="cart__form-row last disabled">
                                <div class="cart__form-column">
                                    <label class="sbp">
                                        СБП
                                        <input class="cart__form-columnColumn-checkbox" type="radio" name="payWay" value="sbp" onchange="toggleActiveClass(this)"/>
                                    </label>
                                    <span>Поясняющий текст как в подробностях происходит оплата</span>
                                </div>
                                <div class="cart__form-column">
                                    <label class="sbp">
                                        Выслать счет
                                        <input class="cart__form-columnColumn-checkbox" type="radio" name="payWay" value="Check" onchange="toggleActiveClass(this)"/>
                                    </label>
                                    <span>Поясняющий текст как в подробностях происходит оплата</span>
                                </div>
                            </div>
                            <div class="cart__end">К оформлению заказа все готово</div>
                            <div class="cart__way">
                                <div class="cart__way-path"></div>
                                <div class="cart__way-path"></div>
                                <div class="cart__way-path"></div>
                            </div>
                        </div>
                    </div>
    )
}