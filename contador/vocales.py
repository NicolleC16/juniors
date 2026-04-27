def contar_vocales(texto):
    contador = 0
    vocales = "aeiouAEIOU"

    for letra in texto:
        if letra in vocales:
            contador += 1

    return contador

palabra = "Hola mundo"
print("Cantidad de vocales:", contar_vocales(palabra))