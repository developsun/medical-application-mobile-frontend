import React,{useEffect} from 'react'
import {NavLink} from "react-router-dom";
import {DoctorCardForList} from "../MicroComponents/DoctorCardForList";
import {StoreCardForList} from "../MicroComponents/StoreCardForList";
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import LocationOn from '@mui/icons-material/LocationOn';
import {StoreCardForListSkeleton} from "../MicroComonentsSkeletons/StoreCardForListSkeleton";
var streetNumber = ["25489", "87459", "35478", "15975", "95125", "78965"];
var streetName = ["A street", "B street address  address", "C street", "D street  address  address", "E street", "F street"];
var cityName = ["Riyadh", "Dammam", "Jedda", "Tabouk", "Makka", "Maddena", "Haiel"];
var stateName = ["Qassem State", "North State", "East State", "South State", "West State"];
var zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"];

var template = [streetNumber, " ", streetName, ", ", cityName, " ", stateName, ", ", zipCode];

function getRandomAddress() {
    return template.map(getRandomElement).join("");
}

function getRandomElement(array) {
    if (array instanceof Array) return array[Math.floor(Math.random() * array.length)];
    else return array;
}


export const Stores = () => {
    const [loading, setLoading] = React.useState(false);
    const [isMounting, setMounting] = React.useState(true);
    const [stores, setStores] = React.useState([])

    // Ideal API response data array for stores listing API
    const storesDemo = [
        {
            "id":1,
            "store_name":"Ma Tara Pharmacy",
            "imageURL":"https://i.pinimg.com/originals/e9/c9/05/e9c905fff8b8562d0186bb0d5c196b8e.jpg",
            "rating":3,
            "closes_in_mins":5,
            "type":"Alopathic Medicine",
            "address": getRandomAddress(),
            "discount":0,
        },
        {
            "id":2,
            "store_name":"Appollo Polyclinic",
            "imageURL":"data:image/jpeg;base64,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",
            "rating":4,
            "closes_in_mins":null,
            "type":"Homeopathic",
            "address": getRandomAddress(),
            "discount":12,
        },
        {
            "id":2,
            "store_name":"Sun Medical Company",
            "imageURL":"data:image/jpeg;base64,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",
            "rating":2,
            "closes_in_mins":14,
            "type":"Alopathic Medicine",
            "address": getRandomAddress(),
            "discount":0,
        },
        {
            "id":1,
            "store_name":"Nurture Care",
            "imageURL":"https://i.pinimg.com/originals/e9/c9/05/e9c905fff8b8562d0186bb0d5c196b8e.jpg",
            "rating":3,
            "closes_in_mins":10,
            "type":"Alopathic Medicine",
            "address": getRandomAddress(),
            "discount":0,
        },
        {
            "id":2,
            "store_name":"Kundu Medical Hall",
            "imageURL":"data:image/jpeg;base64,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",
            "rating":1,
            "closes_in_mins":null,
            "type":"Alopathic Medicine",
            "address": getRandomAddress(),
            "discount":5,
        },
        {
            "id":1,
            "store_name":"Roy Medical Company",
            "imageURL":"https://i.pinimg.com/originals/e9/c9/05/e9c905fff8b8562d0186bb0d5c196b8e.jpg",
            "rating":3,
            "closes_in_mins":null,
            "type":"Homeopathic",
            "address": getRandomAddress(),
            "discount":50,
        },
        {
            "id":2,
            "store_name":"Ma Tara Pharmacy",
            "imageURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRUVFhUYGRgVGBgYGBwYGBgSGBgYGhgaGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQkISU0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQxNDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0ND80NP/AABEIAMUBAAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgAHAf/EADsQAAIBAgQDBgQFAwMEAwAAAAECAAMRBAUhMRJBUQYiYXGBkRMyQqGxwdHh8FJy8SNisjOCotIUFRb/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAJBEAAwEAAgICAgMBAQAAAAAAAAECEQMhEjEEQRMiMlFhcQX/2gAMAwEAAhEDEQA/APJBJrIgSYWBjEhIVJ9MrcwYbStpGcZJBGASSEJK0SXLFYcLAsvw2jAylDCaIvFbHRrsA109ImzIaxjlT920CzJdZJ+xn6K8tGsZZhmIpoQD3iPbxMUpU4FZum3nE+JrcSjXU87neNM6BvEWYrEvVY3JPS5/WSw+E6m5HK+3vA0cX1PnDqFZegt57yyQjYxp0AOX3vJLfa2h8pCnVHX0Eg+I6XHmIWgIsdL84M1Mg/vOesx8ftKyXO6/eJ9jvshUp/zlAyxDSdWowNtvWQvbvH9YwpZVFtbwFyCwudIaKfH+s6rg7C9rxdSZvFhDqoUAMRAqtO+nOVMW6ys1I2AbG2S458O4ddVuOIb6X6T1LDYtalMMp0YX8j0nklFrrc+Rmg7N5qUbgJup9LeMdV9C0t9GoVf9SajAHQTMYZuJ7zTYYaR+L7Ev0MHUERfXS0I+IbawSo+sqySPCUSWWlqrPjpOQ6ykyLpLVWWBJtBgA1OcghrpKDTm0x9E+pcz5NJkeVcQBIiVXih5nyYkWg3SNMDSAtHWMwYQbSjAYW5k/LR3OBOBTW8Hxqjijj4XCInzJ7XPOBdszM9mmL+kRXx3heP1a41/nOCpT5naXXokyyjSDnc+PKO8Hl6DUi/id4FhiF6euvrGC5gg3Nz7wowQ1JR8ot4/5gj0lG+8sTMOLRUY+mnqZ8dnP0AeZ2jGBWcjYW8TPr4qwtYsfATiddSCfCRdWbQA/hEZkL6qkn8eZkkwxa1hz/hhtDBn33/zGVDBEAC3vFqsHmdKsDgQIdiMCLQ/A0LAX5S/EU9JJsrKMLi0KNbkesBqpNJneG7t7axDh2DAo242lorUR5Jxnyg5AKkadZOlVKMGvt9xKnQrtK38vKMIemdna3GAemnpuD7Ta4ZhaeddiKlxbmBY+h0+xnoAFlEtHSZKw2wMBrpYmWfFtKHqXjNiYeLYcXlzpA6FW0MRrznOgoKSxFlnDPvDMErZZSyQppFUvFMQwtC7Cb3K6QVBMlgUHEJqEq2T0kOR6zp4l+oNmVbiYLD8BhtJnKla9Tympy6qCsDWIWnrOrbWmbzdTNDmJtrqPuJn8agfZiD7gx4XYrZm3oPuBf8Amk+UEOodfvaNXouvMHyv9xKiefCD7S2EmLxTFyDr4S2iFGvAfXWHUGLnhVAPX8oa+ANunW3Pwm8kujKW0UUMYundI8LC0nWrBv0A2k8JguNiEGg+ZuQ9YxXKeI2UXA3MFWkPMtiVKdzt9oZSwp/gj2hk4HKHLlwElXIVUJCOlgPGFGhYRm2GtKmpxPLRsSBES1/GfXvaWlZBxaYwmzZRwmZCrTs15rs2+UzKYh9ecrxkeUg9Tf3k1HF/NZQ/8vJ0iQdJRkkazsYeBnvzA/Geh08WOECefdmbsdtpq3DKI800gXKGVbFQM42BGoxli0SY3k36ExI8hQxhQeLr6y+k8mygzQyV5Qjy0GYxxEmgkbzg0DClobh9xHn0+kSYLUiOXPdnNXs6p6Qmrmz3ltDMmXnK8QNTBTKStJV0x+ucXGpi7H4ji1HWLmqcOstw+L1INteX5xlOdi+RaHYjU6cydreAivHVixsl7e3EfKH10N9TccpWo1BVQCNjqTtH0RphmQVQlywJYiwFiTfyEbPRdrcYK8eyD5yPHkg+8TU6LoPiKSeHVrGxUenKH4HOqasfiVKhqKfmREqUyuhAAYhrjUHxEVw6eopNpLGa3K8qBVQzBV5KugH6zR0MAirYWsPKeZ43PbG6OzrYENb4Zvz7pJt7wTD9qal9HOh2Nx99Yj439h/JJ6hXpKOkpVRtMdhu09yONrcv4Y/TMU4OLjGvK8lUtfRWal+grEUhygNSnbSJcb2oRFOut9onp9oHruETS/PoOphmKoWrmfbNWeGA4mqBpKqGEJ1Z2PsBJ18KoU6a9SSZ0T8Wn9nPXypT9CjMizghBc72vyG8y2YYYo+rA8XTkef+Y6xzFeLgLAC176G53GnKJaqEknrD4qG0F06xgqtraG0b/wBN5SlLWM8HQO9rwNmSNV2SdAwFiGO9xp7zWZmoVLxN2Yy8Gz/lp6Rzny2SUX8SdexN8YRjhqgMQVXIh2XcRseUKYuHluKwDp8wlNObLtFSABmPXeJuofAukYQrwJWloa8wxfxyQkaSS9Uk6oeJC8u3jh9rRfgKUZokg32dK9C7EU7Rc3OO8cmhiGo9heWghZU53vykaIvqBBH42J4VY+QJ/CSoI4+hvYypIc4cA6Efp4Qqlhw2nTeCYOmSpJBsOdja+mkMwKEki3zX9baxGykrRvkNAN8VSNCluvWY2nTC8a3HEjsBY767Xm5yBrP/AHKftKMd2LZ3Z6LqrMb2a9rnyizSVPTXDaWCrJKVF/nRWH1qxKFSOjDY+4inMERKrPTUcIOg+YevWOMR2dxKEkoVJ3KqWB9RBP8A85iSRamWAI2UqbdNp1S5zto5qmt6TE9QAsOIHhYhjbQ2vqB0mwyvsv8AEw5ql3QNcot72T6eI8zIYTsjWqODUQogIvxEXtzAAnofwVFGwFgug9py8lf0dHDxvNo8Tx1MBvhlSCtwx4i3Eb767aWl+UYlaLHiACnQtzH7R5n2VM78aAFvqG1+hEUnJahOtN7c7C/3jRfp6JfG9aw1uGcEAqbg7EagyvMsUtNGZzYAe55ARHleVYqmx4FYKfpe3D9z+EPrZFUqtxVnFhsi/KPXmZ0rnmVu9kF8em/XQjDlsOXO7veAJSNz0/xNJnOFCUgiiwBForw+HLBrDU6D1nJ5br/s63OYv6QLRwLNYg848wGF4bE7DRv1n3LMMWfhAsqMQT1tHyULXjpE6pI0PZykOC9oRn9LuDzkOzJ7vrDM+TuSzX6kaf7GJxNONMsXRYHjxYSzJ69tIJfYWYXtHiiTM6DC8fiOM7wVEvEXoo/ZYsMo07yqlSjLD0YlUPMkqdOwltNLmXmnYTsONZGqLzI6wGF7ok61MrDMtccM7HKDz5EyMtusGAcOoa4aw89dPKC03wyMQU4yOZ29toNl9A4iutMtwq3jYeU2OZ9hUSnxX9RO7ihs5uWl6Egz6kFKqEUHoIhzTGoELI2skMoJFZEplyovcC9tJnHpkmx5RlWasB4bnZreyGPoMldMS5U2vTA0BPPXmdBpCMnw7fFQNY3J8rW1mSpqV5R3kuZFKiO12A3F9bWtpEpprB0spGoy+mBiGAFrX9rTT4VwIlyt1qXrDdhbpsbbQ8sQbzmp9lp6HlWqgW5iLH55wkIguxNuvrAs4x/Asjk1FVHxHPebryE3bGWGjUEoDckkXN/LXyn00f8AT4r2BMQV84FM91tOY3hLZ/TdFs4t0vsfEQPUFYxdi0uxlAxZS1xcQLH54gYhDc87bCUJjlIuxvMpZm1poaeMVhpKnrAGZtsVwG6G68xz8xDKeJ4gCDvDjBqOzhONGtuNZTlWF7icrn8bwum0JwdC5J5X/L9ZSNbwjyYkX4bCqgsPM+cuamLbyQp+Mg66by6OXOxr2dcKDfrGWcOCkyuV4oq5XxjHG4okWvKKk5M57FePS43nzLqIFtZKpTvzk8PTK84JXeitHkJSxtCaNOfaqXc+cMw9KSqjomSeHpRphqUqw1KM6FORbKygfELYQWidYbjtoDhxrEZVIdYRyJTmWKNjOV+FZbgkDg3F7zSlumrvoUZNS46i8R4Re5O1p6FnPaFEoBEbi4RYa3Myq5RYkpt0ka2E4dLH2vOieXx9EK4vL2LsDmOJU1DTNuPQgi4lOW5Y6uS4vxfcmPMJTt9JHpDKSgMCRtJVzM9T4/8A5v5I8tCE7Ko9O+zbzE49OCoUtqJ6fh8yULa8yvaPL1dxUTn80WL77Ic/xbTzArspV/0bf0uw99Y9eZvIl4Cy8nsfUftH3xNIK9nOlnQlzymLhztr78oifOeE21sfSbHEU1dSpH88INhuzlFvmFwdwY80kgUtZljiKj3KoWB02JBvzlH/AMYk3dWU36Wv1m3wnZs0X4qNVk/2tZ0PhY7ekvxlOqNC6cj8qtrz35RnQZhnnz4BvoQkaciYNinakQrggkbc5ucYHYG9XpcIFUaHTQCJGy4O5du8x3Y6ny8IPIz4vszaYg3AIIv185pcClkHKW1svQkG20+sQNBM60WZwtU2E1WHy3hRP7QT5kXmfyXCGtXp0xzPE3gq6n+eM9IqYWW4I1Ns5/kXmSjLtgpRVwthNDVw8Gr4bu3lnKIKjNUcLr6xi2DuLyldG9YyAuIJSxjVTFxw0rbDRn8CcmGjqRdPHaaXN4woUZN8FwGFUEnDTO2UTw9GHokjRSEkaRCgnzCUYZJdjzaVYBwzFfWYZMtxakKTD8jN0B8Z1dOKwI0EKwqBRYDSb6NnY3wwAhyFeYEWUmhSvoYptwBx7i5tFr1obidzF7U7xaXR9J8ZeMLD4K5lyVb7/rK+CE4DCfEdU2B38oqlstdyk3RqeyWTpUJdluqgjwLHT7QTMcCaTsh23U9V5Gb3LMKKdNVUWAEQ9qsMTZgL25+f5Tqc5OHyV8nlyNr0zIq9j4Rjhz47Wi+ssswVWxsZMzHLtdYqxJF7m49Y0pfYyNZE3gaHmjOVXHQn7CVk6bRtXVOggTWvAtC66AK+kBGphmNfW0FQRyaN12EwyKj1CRxv3QOYQfqfwmmrVZgMrxfBYA7fjNEcaxAO86uPlWYcfLDdN6Hu95GqvdgdOvcwp37suqTRBy0ZjGCzxlRfSA49e96wymLLJz9lK9IJp6y9VlFCGFNJZeiTPMcbYmQoJBcNULbxhRWeXTPUmS+mstYaT4iy7gihwzfaAlU4ukSdn8yKVgTqG0PhNdmuB40Zesx+Gy96dQcS6Dn1lp8XLBaapNejXYnMQSFUbnWE03iugghiNaTSKt9jig8uapaKErwunUL91QSTsALk+kGAr0QrVLmCVKtoZjMDUQcToy+en2i0C51mpNLs9bh+TC402/RZTr3mm7JUeOrxdLTL1KdpuuxFIIoJ3bWbjW0J8j5c1wty/ZuxoPSAYunxqQdb6a6Q295B6f4y9d9o8FM82zDClXZPqX5b/WB08RE7Yix10Im27U5cXUsmjqeJT0I6+e3rMYHSut/lcXDDow3uJFrC8vUX0c1toZY+aKdf3iPE4R12vb1b9xAiWH7WMHsbMNCceDBXxdgbHeJTVbo0tpljytCkgBTG+pltBdZQidYbQXnC2bAfC4/vuh3DHTbS+h8posFi+G3SIq+ADkMAbgXBG9ucJwTsp4HBvuCdOIfrBNacivXjNRTcHUHeGu54dDEeHqW/l41p1LrLxTDS0CrUyxuOXKEqndvKEqX158/GKc1zp6DhSoKOLjlbqNPGWmvaJVJp8MsMZdJk8v7TIdGuh8dV9xt6xx/9mOsumiTTPL8DG9KLMGsZU55TPUn0GU5cog6tL0aAYkUvAcbhOLlGKmSK3hTw2/QhSiV32n11tHD4cQjLsGgPG4uq6hTsx8Y09vAOsWkMn7NtUAqVG4Kf/k3kOQ8Y8qZpQwycGHQF7W5XP9zmKcxzJ6hsNFGwGnv+kz2PxRDfDTV7XZrX4B/7GdsccpHHfJT9mix/abjHfRRfccXPna41mcBR3uLqt9eepPhOw+EW3EBcnW57xv0JOsNw1IWvbqTYcgP1g5eP9khFyPM+g+llauFKuD1tNZk2XhVFjYj0mFufmUlfKHYHtQ9D51416jRgPzg/EpeI35G1h6QruugN7dZ8fMLMqMpJYXBXb1vzmfyrtPh62ivZuat3W9jGtZwwHPUEeGuk1QmNNNBFcrUUgEGwPnPMO0ODNDE8Sghagve2nFzBmtxTlarlTbvE6QXN0+Khv8y6j/d1kLl+JRW57Qgp1OIawfE4UHW0KoURtqp+3tL6tBwPl4h1X8xOVUi0c81/gifDW6zlpwx3F7H9JEkR9LdFSWEvU85XxqIZg8OxPGwIH0g7k9TA6xEeW1MjLKks6L/tK/a/5QvHYbiU6XZLkem4EjlFHiqcXJAT6nQfiYzensZfhTcHFD+zP4SoGAI/eH1q3Ch6nT3ibHYVqNZlA7j99Oqg7r6G8u+KxABvYdZRSUbCaWot4RRmoaugQjhqIe7f6rbgHqY1pvyi/tFUCUHfZgV4T0NxKJA/6ZIFlJDCxG99/UQ3DY0poCbdL6ftJMRiUDC3xk3H9a/rFh26EaEeMsmmTawPwgjBDF2HaHI08xnooKQy5DBVaXI0AQpTLVMFVparTACQZI7SlWkw0PoDOdNNN+Wl7eMXDLgCSN23J3jQNJSsctSJUJiUYYr4b+UNw9EcLcV7qvdW3zE62BhT07wbEhxtY+BF5V86dJsg+B/QPXosqjjABJ5MCPIwKrTJ5fpJV2qnQ0kZb307pvO+KbG9J1NtbNxD7zoXND9kKhz0wJsIH3Um328bx52fx1RHp0xVYqXVeFu8LX6naIq+ZJTFilW3M6SGV9oaK16CorHiqICzC1rsBHdw0CU9Ntm+cpSxLI4PnYneMcPUSsAyOGAvqCDqPp8/CZ3tKAKztrrYXABtbpBsixgw3dW7IzcR0tZm3ax3B5yaj9dH8u8NWmWo/Pgb3B8bSFfL3pakXHJl1H7QinWB7y+3T9o5wdfiHjzHIzk5OCaA4TMpVRX+dFbzAv7wKpl9O/yW8mYTa18qpPqAUJ/p29ovbs8b6OLeKmcz4bXrsC859MzVHC00N1QX6m7H0vtD8LhWqMFUXJ9gOpPKOqPZ8X773HQDh+8fYTBogsigfzmecePj03+xmqr+QrwuAFMBNydz1NtPSRdB08fXnDMa1nHpKcStnHQztSSWIdCvPsu+JTDLoyG6n8vIxBQHEAba8x0I3m7pIGQr1BEyFalwVGGwa5/7how/ObMYyYK6C2kqxNMFdddQRfXUecOdND+MGxelh4ftGAeb4h2pV3KG3A5sB03t5RrXdcQnx0HeH/UQcyPqtFYAepVcuqgux1N+Z2tC8vR0JdDxdbG9x5Q/WoX/ABkqTwtKkWUnhKPODDuTGKVJclSLVeXJUmDoyR5crxatSWpUmMMleTDwFKktV5sNoaryYeCCpJK8GGCleWKbwUPCKEDBVYgqnQBhK4FZGhCQ8TyZ5/JXkxbicnVr3EzOO7KoHV1FmVgwtpqDcfhN2HnMoO4jrlpCKsMvnuGqiuXR+46huBgGW/PTl6ROzh2CkrTqDThNwj+Kk7HwM3eJpBgPAWmT7Q5Srg6cp18fyOg+WsroZjVw7gsDw/UrbkeHWbjKcYrAMpurC4/fxnluVY0qTh613RblCTd0HRSdSB0mgyfEHDOELXpubo3K528r7EdZekqXkikv6PTke4vLBUi7A17iFlpIbC/ihiHSLA+sLSppGFYDj2787E6qD0lOLe7y4apCEuwLxH2hw/fuP7h5jce0a4B9xIZ0l0Df0mZ+jfZmne4geOe3oCfbX8oW4txLsNx5GL8yPdb+x/8AiYPoJ4+5INx9WvuYzyzMCLC9iOkCbYeH4Hf7/jB20NxyjroQf0zCUM6dOE7UXKZahnToBi5DLFM6dCEtUy5WnToDFqNLVM+zoDFiQ/Dzp0WiHN6DkMmHM6dJnCWKZYDOnTGZ8YxfjRcGdOjx7MjzztAvw6gdd1IPnfkY2y5+L/RYXVwWHVGAvdTOnT0+L+Ay9mw7KYtnpji1I0v1sd5piZ06SLHIZermdOjIDAcQe9CsP8s6dMjFWG+eE4vVGB6Tp0LMZXEbA9Db0MWY9tD/AGP/AMTOnRfoJ5Mdh/OUpadOlBD/2Q==",
            "rating":5,
            "closes_in_mins":40,
            "type":"Alopathic Medicine",
            "address": getRandomAddress(),
            "discount":10,
        },
        {
            "id":1,
            "store_name":"Ma Tara Pharmacy",
            "imageURL":"https://i.pinimg.com/originals/e9/c9/05/e9c905fff8b8562d0186bb0d5c196b8e.jpg",
            "rating":2,
            "closes_in_mins":20,
            "type":"Homeopathic",
            "address": getRandomAddress(),
            "discount":10,
        },
    ]

    const mount = () => {
        setTimeout(function() {
            setStores([...storesDemo]);
            setMounting(false);
         }, 1500);
    }

    // eslint-disable-next-line
    useEffect(() => {

        mount();

    }, [isMounting])
    const  store_card_click =(id) =>{
        setLoading(true);
        setTimeout(function() {
            window.location.href = '/#/details/store/'+id;
        }, 1000);

    }

  return (
    <>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>

        <div className="header-overlay bg-purple-2">
            <div className="row pt-3 px-4">
                <div className="col-12 pt-3">
                    <span className="fs-1  fw-light ">
                        <b>Get your <br/>
                            <span className="fw-bold ">Medicines delivered</span><br/>
                        at your doorstep</b>
                    </span>
                    <br/><br/>
                    <Chip label="30-35 mins delivery" icon={<LocationOn/>}/>
                    <br/><br/>
                    <input type="text" className="doctors-search-input"  placeholder="Search " aria-label="Search Bar"/>
                </div>
            </div>
        </div>

        <div className="container px-4" style={{"margin-top":"310px"}}>
            <div className="card shadow-lg" style={{"height":"90px"}}>
                <center><b>Advetisment Area</b></center>
            </div>
        </div>

        <div className="container px-4" style={{"margin-top":"10px"}}>
            <div className="row">
                <div className="col-12 pt-3">
                    <span className="float-start">Stores near you</span>
                    <span className="float-end"><b>Baranagar, Kolkata</b></span>
                </div>
                <div className="col-12 pt-3">
                    <span className="stores-subheader"> Found <b><i>13</i> stores near your area.</b></span>
                </div>
            </div>
        </div>

        <div className="container px-4" style={{"margin-top":"10px"}}>
            <div className="row">

                {isMounting && [0,1,2,3,4,5].map((x,i)=>(
                <div className="col-12">
                    <div className="storecardforlist">
                        <StoreCardForListSkeleton/>
                    </div>
                </div>
                ))}
                {stores && stores.map((store,id)=>(
                    <div className="col-12" onClick={()=>store_card_click(store.id)}>
                        <div className="storecardforlist">
                                <StoreCardForList details={store} />
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

    </>
  )
}
