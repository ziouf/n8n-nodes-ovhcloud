# OVH Cloud Dbaas — Update Stream Alert

> Opération `outputGraylogStreamAlertUpdatePut` · Fichier source : `nodes/OvhCloudDbaas/outputGraylogStream/outputGraylogStreamAlertUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dbaas/logs/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `alertId` | string | Oui |
| `streamId` | string | Oui |
| `body` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
