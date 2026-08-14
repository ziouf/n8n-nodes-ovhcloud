# OVH Cloud Support — Reply

> Opération `reply` · Fichier source : `nodes/OvhCloudSupport/resources/reply.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/support/tickets/{ticketId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `ticketId` | resourceLocator | Oui |
| `list` | list | — |
| `id` | string | — |
| `message` | string | — |
| `isPrivate` | boolean | — |
| `attachFiles` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
