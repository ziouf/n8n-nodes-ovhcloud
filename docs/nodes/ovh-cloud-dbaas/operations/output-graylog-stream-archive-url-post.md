# OVH Cloud Dbaas — Generate Archive Url

> Opération `outputGraylogStreamArchiveUrlPost` · Fichier source : `nodes/OvhCloudDbaas/outputGraylogStream/outputGraylogStreamArchiveUrlPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dbaas/logs/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `archiveId` | string | Oui |
| `streamId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
