# OVHcloud Domain API v2 - Documentation Technique

**Version**: 1.0
**API Base Path**: `https://eu.api.ovh.com/v2`
**Ressource Path**: `/domain`

Cette documentation technique décrit les endpoints et les opérations disponibles dans l'API OVHcloud Domain v2.

## Table des Matières

- [Endpoints Disponibles](#endpoints-disponibles)
- [Opérations par Endpoint](#opérations-par-endpoint)
- [Paramètres des Opérations](#paramètres-des-opérations)
- [Types de Réponses](#types-de-réponses)
- [Enums et Types Associés](#enums-et-types-associés)
- [Métadonnées IAM](#métadonnées-iam)
- [Statuts des Ressources](#statuts-des-ressources)
- [Statuts des Tâches](#statuts-des-tâches)

---

## Endpoints Disponibles

L'API Domain v2 propose les endpoints suivants pour interagir avec les ressources de domaine :

| Endpoint                                    | Description                                                   |
| ------------------------------------------- | ------------------------------------------------------------- |
| `/domain/alldom`                            | Liste les ressources **AllDom** disponibles                   |
| `/domain/alldom/{alldomName}`               | Gère une ressource **AllDom** spécifique                      |
| `/domain/alldom/{alldomName}/task`          | Liste les tâches liées à une ressource **AllDom**             |
| `/domain/alldom/{alldomName}/task/{taskId}` | Récupère une tâche spécifique liée à une ressource **AllDom** |
| `/domain/name`                              | Liste les ressources de **domaine** disponibles               |
| `/domain/name/{domainName}`                 | Gère un domaine spécifique                                    |
| `/domain/name/{domainName}/task`            | Liste les tâches liées à un domaine                           |
| `/domain/name/{domainName}/task/{taskId}`   | Récupère une tâche spécifique liée à un domaine               |

---

## Opérations par Endpoint

### Endpoint `/domain/alldom`

**Description**: Liste tous les ressources **AllDom** disponibles.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "X-Pagination-Cursor",
            "dataType": "string",
            "paramType": "header",
            "fullType": "string",
            "required": false,
            "description": "Curseur de pagination"
        },
        {
            "name": "X-Pagination-Size",
            "dataType": "long",
            "paramType": "header",
            "fullType": "long",
            "required": false,
            "description": "Taille de pagination"
        },
        {
            "name": "iamTags",
            "dataType": "map[string][]iam.resource.TagFilter",
            "paramType": "query",
            "fullType": "domain.resource.currentState.ExtensionsEnum[]",
            "required": false,
            "description": "Filtre les ressources en fonction des tags IAM"
        }
    ],
    "responseType": "domain.AlldomWithIAM[]",
    "noAuthentication": false,
    "description": "Liste tous les ressources AllDom",
    "iamActions": [
        {
            "name": "domain:apiovh:alldom/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/alldom/{alldomName}`

**Description**: Récupère une ressource **AllDom** spécifique.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "alldomName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom de la ressource AllDom"
        }
    ],
    "responseType": "domain.AlldomWithIAM",
    "noAuthentication": false,
    "description": "Récupère une ressource AllDom",
    "iamActions": [
        {
            "name": "domain:apiovh:alldom/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/alldom/{alldomName}/task`

**Description**: Liste les tâches liées à une ressource **AllDom**.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "X-Pagination-Cursor",
            "dataType": "string",
            "paramType": "header",
            "fullType": "string",
            "required": false,
            "description": "Curseur de pagination"
        },
        {
            "name": "X-Pagination-Size",
            "dataType": "long",
            "paramType": "header",
            "fullType": "long",
            "required": false,
            "description": "Taille de pagination"
        },
        {
            "name": "alldomName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom de la ressource AllDom"
        }
    ],
    "responseType": "common.Task[]",
    "noAuthentication": false,
    "description": "Liste les tâches liées à une ressource AllDom",
    "iamActions": [
        {
            "name": "domain:apiovh:alldom/task/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/alldom/{alldomName}/task/{taskId}`

**Description**: Récupère une tâche spécifique liée à une ressource **AllDom**.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "alldomName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom de la ressource AllDom"
        },
        {
            "name": "taskId",
            "dataType": "uuid",
            "paramType": "path",
            "fullType": "uuid",
            "required": true,
            "description": "ID de la tâche"
        }
    ],
    "responseType": "common.Task",
    "noAuthentication": false,
    "description": "Récupère une tâche spécifique liée à une ressource AllDom",
    "iamActions": [
        {
            "name": "domain:apiovh:alldom/task/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/name`

**Description**: Liste tous les ressources de **domaine** disponibles.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "X-Pagination-Cursor",
            "dataType": "string",
            "paramType": "header",
            "fullType": "string",
            "required": false,
            "description": "Curseur de pagination"
        },
        {
            "name": "X-Pagination-Size",
            "dataType": "long",
            "paramType": "header",
            "fullType": "long",
            "required": false,
            "description": "Taille de pagination"
        },
        {
            "name": "additionalStates",
            "dataType": "domain.resource.currentState.AdditionalStatesEnum[]",
            "paramType": "query",
            "fullType": "domain.resource.currentState.AdditionalStatesEnum[]",
            "required": false,
            "description": "Filtre les résultats ayant tous ces états supplémentaires"
        },
        {
            "name": "contactAdministrator",
            "dataType": "string[]",
            "paramType": "query",
            "fullType": "string[]",
            "required": false,
            "description": "Filtre les résultats par ID de contact administrateur"
        },
        {
            "name": "contactBilling",
            "dataType": "string[]",
            "paramType": "query",
            "fullType": "string[]",
            "required": false,
            "description": "Filtre les résultats par ID de contact facturation"
        },
        {
            "name": "contactOwner",
            "dataType": "string[]",
            "paramType": "query",
            "fullType": "string[]",
            "required": false,
            "description": "Filtre les résultats par ID de contact propriétaire"
        },
        {
            "name": "contactTechnical",
            "dataType": "string[]",
            "paramType": "query",
            "fullType": "string[]",
            "required": false,
            "description": "Filtre les résultats par ID de contact technique"
        },
        {
            "name": "iamTags",
            "dataType": "map[string][]iam.resource.TagFilter",
            "paramType": "query",
            "fullType": "map[string][]iam.resource.TagFilter",
            "required": false,
            "description": "Filtre les ressources en fonction des tags IAM"
        },
        {
            "name": "mainState",
            "dataType": "domain.resource.currentState.MainStateEnum[]",
            "paramType": "query",
            "fullType": "domain.resource.currentState.MainStateEnum[]",
            "required": false,
            "description": "Filtre les résultats ayant tous ces états principaux"
        },
        {
            "name": "searchValue",
            "dataType": "string",
            "paramType": "query",
            "fullType": "string",
            "required": false,
            "description": "Filtre les résultats avec la valeur de recherche sur l'ID de la ressource"
        },
        {
            "name": "suspensionState",
            "dataType": "domain.resource.currentState.SuspensionStateEnum[]",
            "paramType": "query",
            "fullType": "domain.resource.currentState.SuspensionStateEnum[]",
            "required": false,
            "description": "Filtre les résultats ayant tous ces états de suspension"
        }
    ],
    "responseType": "domain.DomainWithIAM[]",
    "noAuthentication": false,
    "description": "Liste tous les ressources de domaine",
    "iamActions": [
        {
            "name": "domain:apiovh:name/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/name/{domainName}`

**Description**: Récupère ou met à jour une ressource **domaine** spécifique.

#### Opération `GET`

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "domainName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom du domaine"
        }
    ],
    "responseType": "domain.DomainWithIAM",
    "noAuthentication": false,
    "description": "Récupère un domaine spécifique",
    "iamActions": [
        {
            "name": "domain:apiovh:name/get",
            "required": true
        }
    ]
}
```

#### Opération `PUT`

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "PUT",
    "parameters": [
        {
            "nameType": "domain.Domain",
            "paramType": "body",
            "fullType": "domain.Domain",
            "required": true,
            "description": "Corps de la requête"
        },
        {
            "name": "domainName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom du domaine"
        }
    ],
    "responseType": "domain.Domain",
    "noAuthentication": false,
    "description": "Met à jour un domaine existant en modifiant diverses configurations via le targetSpec",
    "iamActions": [
        {
            "name": "domain:apiovh:name/edit",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/name/{domainName}/task`

**Description**: Liste les tâches liées à une ressource **domaine** spécifique.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "X-Pagination-Cursor",
            "dataType": "string",
            "paramType": "header",
            "fullType": "string",
            "required": false,
            "description": "Curseur de pagination"
        },
        {
            "name": "X-Pagination-Size",
            "dataType": "long",
            "paramType": "header",
            "fullType": "long",
            "required": false,
            "description": "Taille de pagination"
        },
        {
            "name": "domainName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom du domaine"
        }
    ],
    "responseType": "common.Task[]",
    "noAuthentication": false,
    "description": "Liste les tâches liées à un domaine spécifique",
    "iamActions": [
        {
            "name": "domain:apiovh:name/task/get",
            "required": true
        }
    ]
}
```

---

### Endpoint `/domain/name/{domainName}/task/{taskId}`

**Description**: Récupère une tâche spécifique liée à une ressource **domaine**.

**Opération** :

```json
{
    "apiStatus": {
        "description": "Beta version",
        "value": "BETA"
    },
    "httpMethod": "GET",
    "parameters": [
        {
            "name": "domainName",
            "dataType": "string",
            "paramType": "path",
            "fullType": "string",
            "required": true,
            "description": "Nom du domaine"
        },
        {
            "name": "taskId",
            "dataType": "uuid",
            "paramType": "path",
            "fullType": "uuid",
            "required": true,
            "description": "ID de la tâche"
        }
    ],
    "responseType": "common.Task",
    "noAuthentication": false,
    "description": "Récupère une tâche spécifique liée à un domaine",
    "iamActions": [
        {
            "name": "domain:apiovh:name/task/get",
            "required": true
        }
    ]
}
```

---

## Paramètres des Opérations

### Paramètres Communs

| Nom                       | Type              | Description                                                                                               |
| ------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| **`X-Pagination-Cursor`** | `string` (header) | Curseur pour la pagination. Permet de récupérer les résultats paginés à partir d'une position spécifique. |
| **`X-Pagination-Size`**   | `long` (header)   | Taille de la pagination. Nombre maximal d'éléments à retourner par page.                                  |

---

### Paramètres Spécifiques

#### **AllDom**

| Nom              | Type            | Description                                                                                                                                              |
| ---------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`alldomName`** | `string` (path) | Nom de la ressource **AllDom**. Utilisé comme identifiant unique dans les endpoints `/domain/alldom/{alldomName}` et `/domain/alldom/{alldomName}/task`. |

#### **Domain**

| Nom              | Type            | Description                                                                                                                                                               |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`domainName`** | `string` (path) | Nom du domaine. Utilisé comme identifiant unique dans les endpoints `/domain/name/{domainName}` et `/domain/name/{domainName}/task`.                                      |
| **`taskId`**     | `uuid` (path)   | ID de la tâche. Utilisé pour identifier une tâche spécifique dans les endpoints `/domain/alldom/{alldomName}/task/{taskId}` et `/domain/name/{domainName}/task/{taskId}`. |

#### **Filtres IAM**

| Nom           | Type                                          | Description                                                                                                                              |
| ------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **`iamTags`** | `map[string][]iam.resource.TagFilter` (query) | Filtre les ressources en fonction des tags IAM. Permet de spécifier des critères de filtrage basés sur les tags associés aux ressources. |

#### **Filtres d'État**

| Nom                    | Type                                                          | Description                                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`additionalStates`** | `domain.resource.currentState.AdditionalStatesEnum[]` (query) | Filtre les résultats ayant tous ces **états supplémentaires**. Les valeurs autorisées incluent : `DGCCRF_ABUSE`, `DISPUTE`, `FORCED_DELETION`, `OVH_ABUSE`, `REGISTRY_ABUSE`, `TECHNICAL_SUSPENDED`. |
| **`mainState`**        | `domain.resource.currentState.MainStateEnum[]` (query)        | Filtre les résultats ayant tous ces **états principaux**. Les valeurs autorisées incluent : `DELETED`, `EXPIRED`, `OK`, `PENDING_CREATE`, etc.                                                       |
| **`suspensionState`**  | `domain.resource.currentState.SuspensionStateEnum[]` (query)  | Filtre les résultats ayant tous ces **états de suspension**. Les valeurs autorisées sont : `NOT_SUSPENDED`, `SUSPENDED`.                                                                             |

#### **Filtres de Contact**

| Nom                        | Type               | Description                                                |
| -------------------------- | ------------------ | ---------------------------------------------------------- |
| **`contactAdministrator`** | `string[]` (query) | Filtre les résultats par **ID de contact administrateur**. |
| **`contactBilling`**       | `string[]` (query) | Filtre les résultats par **ID de contact facturation**.    |
| **`contactOwner`**         | `string[]` (query) | Filtre les résultats par **ID de contact propriétaire**.   |
| **`contactTechnical`**     | `string[]` (query) | Filtre les résultats par **ID de contact technique**.      |

---

## Types de Réponses

### Réponses Communs

| Type                       | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| **`domain.AlldomWithIAM`** | Représente une ressource **AllDom** avec ses métadonnées IAM.  |
| **`domain.DomainWithIAM`** | Représente une ressource **domaine** avec ses métadonnées IAM. |
| **`common.Task[]`**        | Liste des tâches liées à une ressource.                        |
| **`common.Task`**          | Détail d'une tâche spécifique.                                 |

---

### Structure des Réponses

#### **`domain.AlldomWithIAM`**

```json
{
    "checksum": "string",
    "currentState": {
        "domains": [
            {
                "dnssecActivated": true,
                "expiresAt": "datetime",
                "extension": "string",
                "mainState": "domain.resource.currentState.MainStateEnum",
                "name": "string",
                "nameServers": [
                    {
                        "ip": "string",
                        "ipv6": "string"
                    }
                ],
                "protectionState": "domain.resource.ProtectionStateEnum",
                "registrationStatus": "domain.resource.currentState.RegistrationStatusEnum"
            }
        ],
        "extensions": ["string"],
        "name": "string",
        "type": "domain.resource.currentState.AlldomTypesEnum"
    },
    "currentTasks": [
        {
            "errors": [
                {
                    "message": "string"
                }
            ],
            "id": "uuid",
            "link": "string",
            "message": "string",
            "progress": [
                {
                    "name": "string",
                    "status": "common.TaskStatusEnum"
                }
            ],
            "status": "common.TaskStatusEnum",
            "type": "string"
        }
    ],
    "iam": {
        "resourceMetadata": {
            "tags": {}
        }
    },
    "id": "string",
    "resourceStatus": "common.ResourceStatusEnum"
}
```

#### **`domain.DomainWithIAM`**

```json
{
    "checksum": "string",
    "currentState": {
        "additionalStates": ["domain.resource.currentState.AdditionalStatesEnum"],
        "authInfoManagedByOVHcloud": true,
        "authInfoSupported": true,
        "contactsConfiguration": {
            "contactAdministrator": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactBilling": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactOwner": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactTechnical": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            }
        },
        "createdAt": "datetime",
        "dnsConfiguration": {
            "configurationType": "domain.resource.currentState.dnsConfiguration.NameServerTypeEnum",
            "dnssecSupported": true,
            "glueRecordIPv6Supported": true,
            "hostSupported": true,
            "maxDNS": "long",
            "minDNS": "long",
            "nameServers": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ]
        },
        "dnssecConfiguration": {
            "dnssecSupported": true,
            "dsData": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum",
                    "digest": "string",
                    "digestType": "long",
                    "keyTag": "long",
                    "maxSig": "long",
                    "minSig": "long"
                }
            ],
            "supportedAlgorithms": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum"
                }
            ]
        },
        "extension": "string",
        "hostsConfiguration": {
            "hostSupported": true,
            "hosts": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ],
            "ipv4Supported": true,
            "ipv6Supported": true,
            "multipleIPsSupported": true
        },
        "mainState": "domain.resource.currentState.MainStateEnum",
        "name": "string",
        "protectionState": "domain.resource.ProtectionStateEnum",
        "suspensionState": "domain.resource.currentState.SuspensionStateEnum"
    },
    "currentTasks": [
        {
            "errors": [
                {
                    "message": "string"
                }
            ],
            "id": "uuid",
            "link": "string",
            "message": "string",
            "progress": [
                {
                    "name": "string",
                    "status": "common.TaskStatusEnum"
                }
            ],
            "status": "common.TaskStatusEnum",
            "type": "string"
        }
    ],
    "iam": {
        "resourceMetadata": {
            "tags": {}
        }
    },
    "id": "string",
    "resourceStatus": "common.ResourceStatusEnum",
    "targetSpec": {
        "contactsConfiguration": {
            "contactAdministrator": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum"
                }
            },
            "contactBilling": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum"
                }
            },
            "contactOwner": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum"
                }
            },
            "contactTechnical": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum"
                }
            }
        },
        "dnsConfiguration": {
            "configurationType": "domain.resource.currentState.dnsConfiguration.NameServerTypeEnum",
            "nameServers": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ]
        },
        "dnssecConfiguration": {
            "dnssecSupported": true,
            "dsData": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum",
                    "digest": "string",
                    "digestType": "long",
                    "keyTag": "long",
                    "maxSig": "long",
                    "minSig": "long"
                }
            ]
        },
        "hostsConfiguration": {
            "hostSupported": true,
            "hosts": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ],
            "ipv4Supported": true,
            "ipv6Supported": true,
            "multipleIPsSupported": true
        },
        "protectionState": "domain.resource.ProtectionStateEnum"
    }
}
```

---

## Enums et Types Associés

### **`domain.resource.currentState.AlldomTypesEnum`**

Types de services **AllDom** autorisés :

- `FRENCH`
- `FRENCH+INTERNATIONAL`
- `INTERNATIONAL`

---

### **`domain.resource.currentState.MainStateEnum`**

États principaux autorisés pour un domaine :

- `DELETED`
- `EXPIRED`
- `OK`
- `PENDING_CREATE`
- `PENDING_DELETE`
- `PENDING_INTERNAL_TRANSFER`
- `PENDING_OUTGOING_TRANSFER`
- `RESTORABLE`
- `TO_DELETE`

---

### **`domain.resource.currentState.AdditionalStatesEnum`**

États supplémentaires autorisés pour un domaine :

- `DGCCRF_ABUSE`
- `DISPUTE`
- `FORCED_DELETION`
- `OVH_ABUSE`
- `REGISTRY_ABUSE`
- `TECHNICAL_SUSPENDED`

---

### **`domain.resource.ProtectionStateEnum`**

États de protection autorisés :

- `PROTECTED`
- `UNPROTECTED`

---

### **`domain.resource.currentState.SuspensionStateEnum`**

États de suspension autorisés :

- `NOT_SUSPENDED`
- `SUSPENDED`

---

### **`domain.resource.currentState.RegistrationStatusEnum`**

Statuts d'enregistrement autorisés :

- `REGISTERED`
- `UNREGISTERED`

---

### **`domain.resource.DisclosedFieldsEnum`**

Champs pouvant être affichés en texte clair via RDDS :

- `ADDRESS`
- `CITY`
- `COUNTRY`
- `EMAIL`
- `FAX`
- `NAME`
- `ORGANIZATION`
- `PHONE`
- `PROVINCE`
- `ZIP`

---

### **`domain.resource.DisclosureConfigurationEnum`**

Configurations de disclosure autorisées :

- `DISCLOSED`
- `REDACTED`

---

### **`common.CurrentTaskStatusEnum`**

Statuts d'une tâche :

- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### **`common.TaskStatusEnum`**

Statuts d'une tâche :

- `DONE`
- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

## Métadonnées IAM

Les endpoints de l'API Domain v2 incluent des **métadonnées IAM** pour chaque ressource.

### **`iam.ResourceMetadata`**

```json
{
    "tags": {}
}
```

---

## Statuts des Ressources

### **`common.ResourceStatusEnum`**

Statuts des ressources **AllDom** et **Domain** :

- `CREATING`
- `DELETING`
- `ERROR`
- `OUT_OF_SYNC`
- `READY`
- `SUSPENDED`
- `UPDATING`

---

## Statuts des Tâches

### **`common.TaskStatusEnum`**

Statuts des tâches asynchrones :

- `DONE` : La tâche a été exécutée avec succès.
- `ERROR` : La tâche a échoué. Elle ne peut pas être relancée sans intervention utilisateur.
- `PENDING` : La tâche est en attente d'exécution.
- `RUNNING` : La tâche est en cours d'exécution.
- `SCHEDULED` : La tâche est planifiée pour une exécution future.
- `WAITING_USER_INPUT` : La tâche est en attente d'une action utilisateur.

---

### **`common.CurrentTaskStatusEnum`**

Statuts globaux d'une tâche en cours :

- `ERROR` : La tâche a échoué et nécessite une intervention.
- `PENDING` : La tâche est en attente d'exécution.
- `RUNNING` : La tâche est en cours d'exécution.
- `SCHEDULED` : La tâche est planifiée pour une exécution future.
- `WAITING_USER_INPUT` : La tâche est en attente d'une action utilisateur.

---

## Exemples d'Utilisation

### Exemple 1 : Lister tous les domaines

```bash
curl -X GET "https://eu.api.ovh.com/v2/domain/name" \
     -H "X-Pagination-Cursor: abc123" \
     -H "X-Pagination-Size: 100" \
     -H "Content-Type: application/json" \
     -H "Accept: application/json"
```

**Réponse attendue** :

```json
[
    {
        "checksum": "string",
        "currentState": {
            "additionalStates": ["domain.resource.currentState.AdditionalStatesEnum"],
            "authInfoManagedByOVHcloud": true,
            "authInfoSupported": true,
            "contactsConfiguration": {
                "contactAdministrator": {
                    "disclosurePolicy": {
                        "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                        "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                        "forcedDisclosureConfiguration": true
                    },
                    "id": "string"
                },
                "contactBilling": {
                    "disclosurePolicy": {
                        "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                        "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                        "forcedDisclosureConfiguration": true
                    },
                    "id": "string"
                },
                "contactOwner": {
                    "disclosurePolicy": {
                        "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                        "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                        "forcedDisclosureConfiguration": true
                    },
                    "id": "string"
                },
                "contactTechnical": {
                    "disclosurePolicy": {
                        "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                        "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                        "forcedDisclosureConfiguration": true
                    },
                    "id": "string"
                }
            },
            "createdAt": "datetime",
            "dnsConfiguration": {
                "configurationType": "domain.resource.currentState.dnsConfiguration.NameServerTypeEnum",
                "dnssecSupported": true,
                "glueRecordIPv6Supported": true,
                "hostSupported": true,
                "maxDNS": "long",
                "minDNS": "long",
                "nameServers": [
                    {
                        "ip": "string",
                        "ipv6": "string"
                    }
                ]
            },
            "dnssecConfiguration": {
                "dnssecSupported": true,
                "dsData": [
                    {
                        "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum",
                        "digest": "string",
                        "digestType": "long",
                        "keyTag": "long",
                        "maxSig": "long",
                        "minSig": "long"
                    }
                ],
                "supportedAlgorithms": [
                    {
                        "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum"
                    }
                ]
            },
            "extension": "string",
            "hostsConfiguration": {
                "hostSupported": true,
                "hosts": [
                    {
                        "ip": "string",
                        "ipv6": "string"
                    }
                ],
                "ipv4Supported": true,
                "ipv6Supported": true,
                "multipleIPsSupported": true
            },
            "mainState": "domain.resource.currentState.MainStateEnum",
            "name": "string",
            "protectionState": "domain.resource.ProtectionStateEnum",
            "suspensionState": "domain.resource.currentState.SuspensionStateEnum"
        },
        "currentTasks": [
            {
                "errors": [
                    {
                        "message": "string"
                    }
                ],
                "id": "uuid",
                "link": "string",
                "message": "string",
                "progress": [
                    {
                        "name": "string",
                        "status": "common.TaskStatusEnum"
                    }
                ],
                "status": "common.TaskStatusEnum",
                "type": "string"
            }
        ],
        "iam": {
            "resourceMetadata": {
                "tags": {}
            }
        },
        "id": "string",
        "resourceStatus": "common.ResourceStatusEnum",
        "targetSpec": {
            "contactsConfiguration": {},
            "dnsConfiguration": {},
            "dnssecConfiguration": {},
            "hostsConfiguration": {},
            "protectionState": "domain.resource.ProtectionStateEnum"
        }
    }
]
```

---

### Exemple 2 : Récupérer un domaine spécifique

```bash
curl -X GET "https://eu.api.ovh.com/v2/domain/name/example.com" \
     -H "Content-Type: application/json" \
     -H "Accept: application/json"
```

**Réponse attendue** :

```json
{
    "checksum": "string",
    "currentState": {
        "additionalStates": ["domain.resource.currentState.AdditionalStatesEnum"],
        "authInfoManagedByOVHcloud": true,
        "authInfoSupported": true,
        "contactsConfiguration": {
            "contactAdministrator": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactBilling": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactOwner": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactTechnical": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            }
        },
        "createdAt": "datetime",
        "dnsConfiguration": {
            "configurationType": "domain.resource.currentState.dnsConfiguration.NameServerTypeEnum",
            "dnssecSupported": true,
            "glueRecordIPv6Supported": true,
            "hostSupported": true,
            "maxDNS": "long",
            "minDNS": "long",
            "nameServers": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ]
        },
        "dnssecConfiguration": {
            "dnssecSupported": true,
            "dsData": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum",
                    "digest": "string",
                    "digestType": "long",
                    "keyTag": "long",
                    "maxSig": "long",
                    "minSig": "long"
                }
            ],
            "supportedAlgorithms": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum"
                }
            ]
        },
        "extension": "string",
        "hostsConfiguration": {
            "hostSupported": true,
            "hosts": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ],
            "ipv4Supported": true,
            "ipv6Supported": true,
            "multipleIPsSupported": true
        },
        "mainState": "domain.resource.currentState.MainStateEnum",
        "name": "string",
        "protectionState": "domain.resource.ProtectionStateEnum",
        "suspensionState": "domain.resource.currentState.SuspensionStateEnum"
    },
    "currentTasks": [
        {
            "errors": [
                {
                    "message": "string"
                }
            ],
            "id": "uuid",
            "link": "string",
            "message": "string",
            "progress": [
                {
                    "name": "string",
                    "status": "common.TaskStatusEnum"
                }
            ],
            "status": "common.TaskStatusEnum",
            "type": "string"
        }
    ],
    "iam": {
        "resourceMetadata": {
            "tags": {}
        }
    },
    "id": "example.com",
    "resourceStatus": "common.ResourceStatusEnum"
}
```

---

### Exemple 3 : Mettre à jour un domaine

```bash
curl -X PUT "https://eu.api.ovh.com/v2/domain/name/example.com" \
     -H "Content-Type: application/json" \
     -d '{
           "targetSpec": {
             "contactsConfiguration": {
               "contactAdministrator": {
                 "id": "admin123",
                 "disclosurePolicy": {
                   "disclosureConfiguration": "DISCLOSED",
                   "disclosedFields": ["EMAIL", "NAME"]
                 }
               },
               "contactBilling": {
                 "id": "billing456",
                 "disclosurePolicy": {
                   "disclosureConfiguration": "REDACTED"
                 }
               },
               "contactOwner": {
                 "id": "owner789",
                 "disclosurePolicy": {
                   "disclosureConfiguration": "DISCLOSED",
                   "disclosedFields": ["ORGANIZATION"]
                 }
               },
               "contactTechnical": {
                 "id": "tech012",
                 "disclosurePolicy": {
                   "disclosureConfiguration": "DISCLOSED",
                   "disclosedFields": ["PHONE"]
                 }
               }
             },
             "dnsConfiguration": {
               "nameServers": [
                 {"ip": "1.2.3.4"},
                 {"ipv6": "2001:db8::1"}
               ]
             },
             "dnssecConfiguration": {
               "dsData": [
                 {
                   "algorithm": "RSASHA256",
                   "digest": "digest123",
                   "digestType": 1,
                   "keyTag": 456,
                   "maxSig": 10,
                   "minSig": 1
                 }
               ]
             },
             "hostsConfiguration": {
               "hosts": [
                 {"ip": "1.2.3.4"}
               ],
               "ipv4Supported": true,
               "ipv6Supported": true,
               "multipleIPsSupported": true
             },
             "protectionState": "PROTECTED"
           }
         }'
```

**Réponse attendue** :

```json
{
    "checksum": "string",
    "currentState": {
        "additionalStates": ["domain.resource.currentState.AdditionalStatesEnum"],
        "authInfoManagedByOVHcloud": true,
        "authInfoSupported": true,
        "contactsConfiguration": {
            "contactAdministrator": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactBilling": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactOwner": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            },
            "contactTechnical": {
                "disclosurePolicy": {
                    "disclosedFields": ["domain.resource.DisclosedFieldsEnum"],
                    "disclosureConfiguration": "domain.resource.DisclosureConfigurationEnum",
                    "forcedDisclosureConfiguration": true
                },
                "id": "string"
            }
        },
        "createdAt": "datetime",
        "dnsConfiguration": {
            "configurationType": "domain.resource.currentState.dnsConfiguration.NameServerTypeEnum",
            "dnssecSupported": true,
            "glueRecordIPv6Supported": true,
            "hostSupported": true,
            "maxDNS": "long",
            "minDNS": "long",
            "nameServers": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ]
        },
        "dnssecConfiguration": {
            "dnssecSupported": true,
            "dsData": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum",
                    "digest": "string",
                    "digestType": "long",
                    "keyTag": "long",
                    "maxSig": "long",
                    "minSig": "long"
                }
            ],
            "supportedAlgorithms": [
                {
                    "algorithm": "domain.resource.currentState.dnssecConfiguration.AlgorithmNameEnum"
                }
            ]
        },
        "extension": "string",
        "hostsConfiguration": {
            "hostSupported": true,
            "hosts": [
                {
                    "ip": "string",
                    "ipv6": "string"
                }
            ],
            "ipv4Supported": true,
            "ipv6Supported": true,
            "multipleIPsSupported": true
        },
        "mainState": "domain.resource.currentState.MainStateEnum",
        "name": "string",
        "protectionState": "domain.resource.ProtectionStateEnum",
        "suspensionState": "domain.resource.currentState.SuspensionStateEnum"
    },
    "currentTasks": [
        {
            "errors": [
                {
                    "message": "string"
                }
            ],
            "id": "uuid",
            "link": "string",
            "message": "string",
            "progress": [
                {
                    "name": "string",
                    "status": "common.TaskStatusEnum"
                }
            ],
            "status": "common.TaskStatusEnum",
            "type": "string"
        }
    ],
    "iam": {
        "resourceMetadata": {
            "tags": {}
        }
    },
    "id": "example.com",
    "resourceStatus": "common.ResourceStatusEnum",
    "targetSpec": {
        "contactsConfiguration": {},
        "dnsConfiguration": {},
        "dnssecConfiguration": {},
        "hostsConfiguration": {},
        "protectionState": "domain.resource.ProtectionStateEnum"
    }
}
```

---

## Gestion des Erreurs

### **`NodeApiError`**

Utilisez `NodeApiError` pour gérer les erreurs spécifiques à n8n.

**Exemple** :

```typescript
import { NodeApiError } from 'n8n-workflow';

try {
    // Appel à l'API OVHcloud
} catch (error) {
    throw new NodeApiError(this, error, {
        message: 'Erreur lors de la récupération des domaines',
    });
}
```

---

### **Messages d'Erreur**

Les erreurs doivent être descriptives et inclure un contexte pour faciliter le débogage.

**Exemple** :

```json
{
    "error": "Invalid domain name",
    "message": "The domain name 'example..com' is invalid. Please check the format and try again.",
    "statusCode": 400
}
```

---

## Bonnes Pratiques

### **Validation des Entrées**

Validez toujours les entrées avant d'effectuer des appels API.

**Exemple en TypeScript** :

```typescript
function validateDomainName(domainName: string): boolean {
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/;
    return domainRegex.test(domainName);
}
```

---

### **Authentification**

Les endpoints nécessitent une authentification via les **clés d'API OVHcloud**.

**Exemple de configuration des clés d'API** :

```json
{
    "applicationKey": "votre_clé_application",
    "applicationSecret": "votre_secret_application",
    "consumerKey": "votre_clé_consommateur"
}
```

---

## Notes

- Les opérations en **BETA** sont sujettes à des changements.
- Les **statuts des ressources** (`resourceStatus`) indiquent l'état actuel de la ressource.
- Les **statuts des tâches** (`TaskStatusEnum`) permettent de suivre l'avancement des opérations asynchrones.
- Les **métadonnées IAM** sont utilisées pour filtrer et contrôler l'accès aux ressources.

---

## Références

- [Documentation Officielle OVHcloud Domain API v2](https://api.ovh.com/)
- [n8n Documentation](https://docs.n8n.io/)
- [OVHcloud API Client](https://github.com/ovh/n8n-nodes-ovhcloud)
