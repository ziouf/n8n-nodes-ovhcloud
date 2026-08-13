# OVH Cloud Support — Documentation

## Vue d'ensemble

Le node **OVH Cloud Support** permet de gérer les tickets de support OVHcloud directement depuis n8n. Il offre un CRUD complet pour créer, récupérer, lister, fermer, rouvrir, répondre, noter et marquer comme lus les tickets de support.

### API Utilisée

- **Version** : `v2`
- **Endpoint de base** : `https://eu.api.ovh.com/v2/`
- **Endpoints** : `/supportTicket`

---

## Opérations Disponibles

| Opération        | Méthode | Endpoint                                     | Description                           |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------- |
| **Create**       | POST    | `/supportTicket/create`                      | Créer un nouveau ticket de support    |
| **Get**          | GET     | `/supportTicket/{ticketId}`                  | Récupérer un ticket par son ID        |
| **List**         | GET     | `/supportTicket`                             | Lister tous les tickets de support    |
| **Get Messages** | GET     | `/supportTicket/{ticketId}/messages`         | Récupérer les messages d'un ticket    |
| **Close**        | POST    | `/supportTicket/{ticketId}` (method: close)  | Fermer un ticket de support           |
| **Reopen**       | POST    | `/supportTicket/{ticketId}` (method: reopen) | Rouvrir un ticket de support          |
| **Reply**        | POST    | `/supportTicket/{ticketId}/messages`         | Répondre à un ticket de support       |
| **Score**        | POST    | `/supportTicket/{ticketId}/messages`         | Noter un ticket de support (feedback) |
| **Read All**     | POST    | `/supportTicket/{ticketId}/messages`         | Marquer tous les messages comme lus   |

---

## Paramètres par Opération

### Create

| Paramètre    | Type    | Requis | Description                                               |
| ------------ | ------- | ------ | --------------------------------------------------------- |
| Subject      | string  | Oui    | Le sujet du ticket                                        |
| Body         | string  | Non    | Le corps du message                                       |
| Category     | options | Non    | La catégorie du ticket (assistance, billing, incident)    |
| Product      | options | Non    | Le produit concerné (adsl, cdn, dedicated, hosting, etc.) |
| Service Name | string  | Non    | Le nom interne du service concerné                        |

### Get / Get Messages / Close / Reopen / Read All

| Paramètre | Type            | Requis | Description               |
| --------- | --------------- | ------ | ------------------------- |
| Ticket ID | resourceLocator | Oui    | L'ID du ticket de support |

Modes :

- **From List** : sélectionne depuis une liste déroulante auto-paginée
- **By ID** : saisit manuellement l'ID du ticket

### List

Aucun paramètre obligatoire. L'endpoint retourne directement un tableau de tickets.

#### Filtres optionnels

Le node expose un bloc **Filters** optionnel organisé en groupes. Aucun filtre = requête identique à avant (non-breaking).

| n8n parameter                        | API query param        | Type     | Values                                                                                                                                                                                                                                                                                           |
| ------------------------------------ | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filters.dateRange.minCreationDate`  | `minCreationDate`      | dateTime | ISO 8601 date string                                                                                                                                                                                                                                                                             |
| `filters.dateRange.maxCreationDate`  | `maxCreationDate`      | dateTime | ISO 8601 date string                                                                                                                                                                                                                                                                             |
| `filters.status.value`               | `status`               | options  | `closed`, `open`, `unknown`                                                                                                                                                                                                                                                                      |
| `filters.category.category`          | `category`             | options  | `assistance`, `billing`, `incident`                                                                                                                                                                                                                                                              |
| `filters.category.product`           | `product`              | options  | `adsl`, `cdn`, `dedicated`, `dedicated-billing`, `dedicated-other`, `dedicatedcloud`, `domain`, `exchange`, `fax`, `hosting`, `housing`, `iaas`, `mail`, `network`, `publiccloud`, `sms`, `ssl`, `storage`, `telecom-billing`, `telecom-other`, `vac`, `voip`, `vps`, `web-billing`, `web-other` |
| `filters.search.subject`             | `subject`              | string   | Free text                                                                                                                                                                                                                                                                                        |
| `filters.search.ticketNumber`        | `ticketNumber`         | string   | Ticket number                                                                                                                                                                                                                                                                                    |
| `filters.search.serviceName`         | `serviceName`          | string   | Service name                                                                                                                                                                                                                                                                                     |
| `filters.flags.archived`             | `archived`             | boolean  | `true` / `false`                                                                                                                                                                                                                                                                                 |
| `filters.flags.customerReplyNeeded`  | `customerReplyNeeded`  | boolean  | `true` / `false`                                                                                                                                                                                                                                                                                 |
| `filters.flags.excludeAutogenerated` | `excludeAutogenerated` | boolean  | `true` / `false`                                                                                                                                                                                                                                                                                 |
| `filters.pagination.pageSize`        | `pageSize`             | number   | Number of tickets per page (enables page-based fetching)                                                                                                                                                                                                                                         |
| `filters.pagination.page`            | `page`                 | number   | Page to fetch (only valid when Page Size is set)                                                                                                                                                                                                                                                 |

> **Note on pagination**: `/support/tickets` does not accept `offset`/`limit`. Use `pageSize` + `page` from the Filters block for API-native pagination, which is distinct from the node-level `maxItems` client-side pagination.

### Reply

| Paramètre    | Type            | Requis | Description                                                    |
| ------------ | --------------- | ------ | -------------------------------------------------------------- |
| Ticket ID    | resourceLocator | Oui    | L'ID du ticket de support                                      |
| Message      | string          | Non    | Le message à envoyer                                           |
| Private      | boolean         | Non    | Si le message est privé (visible par l'utilisateur uniquement) |
| Attach Files | boolean         | Non    | Si le fichier joint doit être attaché                          |

### Score

| Paramètre | Type            | Requis | Description                           |
| --------- | --------------- | ------ | ------------------------------------- |
| Ticket ID | resourceLocator | Oui    | L'ID du ticket de support             |
| Score     | number          | Non    | La note de satisfaction (0-5)         |
| Comment   | string          | Non    | Un commentaire optionnel pour la note |

---

## Exemples d'Utilisation

### Créer un ticket de support

1. Ajouter le node **OVH Cloud Support** dans votre workflow n8n
2. Sélectionner l'opération **Create**
3. Remplir les paramètres :
   - **Subject** : `Problème de connexion`
   - **Body** : `Bonjour, je rencontre un problème de connexion à mon serveur dédié.`
   - **Category** : `assistance`
   - **Product** : `dedicated`
   - **Service Name** : `my-server-name`
4. Cliquer sur "Execute Node" — le nouveau ticket sera créé et retourné

### Lister tous les tickets

1. Sélectionner l'opération **List**
2. Cliquer sur "Execute Node" — la liste de tous les tickets sera retournée

### Répondre à un ticket

1. Sélectionner l'opération **Reply**
2. Dans **Ticket ID**, sélectionner le ticket depuis la liste
3. Remplir **Message** : `Merci pour votre réponse`
4. Cliquer sur "Execute Node"

---

## Gestion des Erreurs

Le node utilise l'erreur standard `NodeApiError` pour signaler toutes les erreurs renvoyées par l'API OVHcloud.

| Code | Description                                 |
| ---- | ------------------------------------------- |
| 401  | Authentification invalide ou expirée        |
| 403  | Accès refusé — vérifiez les permissions IAM |
| 404  | Ressource introuvable (ticket ID incorrect) |
| 429  | Limitation du débit API                     |

---

## Tests Non-Régression

Le nœud est couvert par des tests unitaires (Jest + ts-jest) qui vérifient :

- Les appels API pour toutes les opérations
- La validation des paramètres
- Le respect des patterns d'URL définis par l'API spec

### Exécution des Tests

```bash
# Exécuter tous les tests
npm test

# Exécuter un test spécifique
npm test -- nodes/OvhCloudSupport/resources/get.operation.spec.ts

# Exécuter avec couverture
npm run test:coverage
```

---

## Voir Aussi

- [Documentation complète du projet](../README.md)
- [Spécifications API (JSON)](../../api-specs/v2.json)
- [Sécurité & gestion des identifiants](../_shared/security.md)
