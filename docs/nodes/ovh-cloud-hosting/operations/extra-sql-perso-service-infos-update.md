# OVH Cloud Hosting — extraSqlPersoServiceInfosUpdate

> Opération `extraSqlPersoServiceInfosUpdate` · Fichier source : `nodes/OvhCloudHosting/extraSqlPerso/serviceInfosUpdatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `id` | number | Oui |
| `renewAutomatic` | boolean | — |
| `renewDeleteAtExpiration` | boolean | — |
| `renewForced` | boolean | — |
| `renewManualPayment` | boolean | — |
| `renewPeriod` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
