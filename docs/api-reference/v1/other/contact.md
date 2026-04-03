# API Contact - Documentation

**Version API**: 1.0  
**Base Path**: `https://eu.api.ovh.com/v1`  
**Resource Path**: `/contact`

---

## Vue d'ensemble

L'API Contact permet de récupérer et d'envoyer des formulaires via l'API OVH. Elle expose deux endpoints principaux pour la gestion des caractéristiques des formulaires et leur envoi.

---

## Endpoints

### 1. Récupérer les caractéristiques du formulaire

**Endpoint**: `GET /contact/form`

| Propriété            | Valeur                                      |
| -------------------- | ------------------------------------------- |
| **Méthode HTTP**     | GET                                         |
| **Authentification** | Non requise                                 |
| **Statut API**       | PRODUCTION (Version stable)                 |
| **Description**      | Récupère les caractéristiques du formulaire |

#### Réponse

**Type**: `contact.FormCharacteristic[]`

**Description**: Tableau d'objets contenant les caractéristiques du formulaire.

**Structure de l'objet `FormCharacteristic`**:

| Propriété | Type                              | Description                            | Requis |
| --------- | --------------------------------- | -------------------------------------- | ------ |
| `keys`    | `contact.KeyFormCharacteristic[]` | Liste des clés du formulaire à envoyer | Non    |
| `type`    | `string`                          | Type du formulaire                     | Non    |

**Structure de l'objet `KeyFormCharacteristic`**:

| Propriété  | Type      | Description                   | Requis |
| ---------- | --------- | ----------------------------- | ------ |
| `key`      | `string`  | Nom de la clé                 | Non    |
| `required` | `boolean` | Indique si la clé est requise | Non    |

---

### 2. Envoyer un formulaire

**Endpoint**: `POST /contact/form/send`

| Propriété            | Valeur                                                                          |
| -------------------- | ------------------------------------------------------------------------------- |
| **Méthode HTTP**     | POST                                                                            |
| **Authentification** | Non requise                                                                     |
| **Statut API**       | PRODUCTION (Version stable)                                                     |
| **Description**      | Envoie un formulaire suivant les caractéristiques définies dans `/contact/form` |

#### Paramètres

| Paramètre | Type                                 | Description                | Requis | Emplacement |
| --------- | ------------------------------------ | -------------------------- | ------ | ----------- |
| `form`    | `complexType.SafeKeyValue<string>[]` | Informations du formulaire | Oui    | Body        |
| `type`    | `string`                             | Type du formulaire         | Oui    | Body        |

**Description du type `complexType.SafeKeyValue<T>`**:

| Propriété | Type     | Description              | Requis |
| --------- | -------- | ------------------------ | ------ |
| `key`     | `string` | Clé (string valide)      | Non    |
| `value`   | `T`      | Valeur associée à la clé | Non    |

---

## Modèles de données

### `contact.FormCharacteristic`

**ID**: FormCharacteristic  
**Description**: Caractéristiques d'un formulaire

| Propriété | Type                              | Description                  | Requis |
| --------- | --------------------------------- | ---------------------------- | ------ |
| `keys`    | `contact.KeyFormCharacteristic[]` | Clés du formulaire à envoyer | Non    |
| `type`    | `string`                          | Type du formulaire           | Non    |

### `contact.KeyFormCharacteristic`

**ID**: KeyFormCharacteristic  
**Description**: Description d'une clé de formulaire

| Propriété  | Type      | Description                   | Requis |
| ---------- | --------- | ----------------------------- | ------ |
| `key`      | `string`  | Nom de la clé                 | Non    |
| `required` | `boolean` | Indique si la clé est requise | Non    |

### `complexType.SafeKeyValue<T>`

**ID**: SafeKeyValue  
**Description**: Paire clé-valeur avec des clés chaînes de caractères valides

| Propriété | Type     | Description | Requis |
| --------- | -------- | ----------- | ------ |
| `key`     | `string` | Clé         | Non    |
| `value`   | `T`      | Valeur      | Non    |

---

## Exemples d'utilisation

### Exemple 1 : Récupérer les caractéristiques d'un formulaire

```bash
curl -X GET "https://eu.api.ovh.com/v1/contact/form"
```

**Réponse attendue**:

```json
[
	{
		"keys": [
			{
				"key": "email",
				"required": true
			},
			{
				"key": "message",
				"required": true
			}
		],
		"type": "form"
	}
]
```

### Exemple 2 : Envoyer un formulaire

```bash
curl -X POST "https://eu.api.ovh.com/v1/contact/form/send" \
  -H "Content-Type: application/json" \
  -d '{
    "form": {
      "email": "user@example.com",
      "message": "Bonjour, merci pour votre contact."
    },
    "type": "form"
  }'
```

**Réponse attendue**:

```json
{}
```

---

## Notes importantes

- L'authentification n'est **pas requise** pour ces endpoints.
- Les endpoints sont disponibles en version **PRODUCTION** (stable).
- Le type de formulaire (`type`) doit correspondre aux caractéristiques récupérées via `/contact/form`.
- Les paramètres du formulaire sont transmis via le corps de la requête (`body`).

---

## Voir aussi

- [API OVH Documentation](https://eu.api.ovh.com/)
- [Autres ressources Contact](/contact)
