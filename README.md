# Alura challenge (Amigo secreto en js)

Esta es una aplicación web simple que permite al usuario añadir nombres a una lista para luego seleccionar un "amigo secreto" (ganador) desde dicha lista. Esta hecha usando HTML, CSS y JavaScript.

## Caracteristicas

1. **Añadir nombres**:
    
    - El usuario puede introducir un nombre en el campo al dar click al botón "Añadir".
        
    - Los nombres se muestran en una lista enumerada debajo del campo donde se ingresan
        
2. **Amigo Secreto**:
    
    - La app escoge a un nombre de forma aleatoria desde la lista ingresada previamente y lo declara "Ganador".
        
    - El Amigo secreto (resultado) se muestra debajo de la lista de nombres ingresados y a la vez se borra la lista para realizar un sorteo nuevo
        
3. **Verificación de entradas**:
    
    - La aplicación evita que los usuarios ingresen números en el campo donde van los nombres, si un número es ingresado, este se borra y se muestra una alerta.
        
4. Reinicio de la lista:
    
    - Luego que se declara al "Amigo secreto", la lista se borra y se reinicia, permitiendo ingresar una nueva lista de amigos.

## Cómo usar

1. **Añadir nombres**:
    
    - Ingresar un nombre en el campo y luego dar click en "Añadir"
        
    - El nombre será añadido a la lista debajo de la caja de entrada de texto.
    
    - Luego que se han ingresado todos los nombres, dar click en "sortear amigo"
        
    - Un nombre aleatorio será seleccionado como ganador y mostrado debajo de la lista
        
2. **Empezar de nuevo**:
    
    -Despues del sorteo, la lista de nombres se borra automaticamente y se reinicia el juego.
        

---

## Codigo utilizado

### Funciones

1. **`agregarAmigo()`**:
    
    - Añade un nombre a la lista de amigos.
        
    - Valida la entrada de datos para asegurar que no este vacía o duplicada.
        
2. **`actualizarListaAmigos()`**:
    
    - Actualiza la lista de nombres ingresados en el objeto `#listaAmigos`
        
3. **`sortearAmigo()`**:
    
    - Selecciona un nombre de forma aleatoria desde la lista.
        
    - Muestra el nombre seleccionado en el `#resultado`
        
    - Limpia la lista de nombres y reinicia el juego
        
4. **`validarEntrada(event)`**:
    
    -  Evita que se ingresen números
        
    - Elimina los números ingresados y muestra una alerta
        

---

## Cómo ejecutar

1. Clonar repositorio a tu maquina local:
    
    bash
    
    Copy
    
    git clone https://github.com/ApolloC0/jschallengeamigosecreto.git
    
2. Abrir el archivo `index.html` en tu navegador web.
    

---

## Tecnologias usadas

- **HTML**
    
- **CSS**
    
- **JavaScript**
    

---

## Screenshots

### Adding Names

![[screenshot.1508.jpg]]

### Ganador

![[screenshot.1507.jpg]]
    

---

## Contacto
    
- **GitHub**: [ApolloC0](https://github.com/ApolloC0)
