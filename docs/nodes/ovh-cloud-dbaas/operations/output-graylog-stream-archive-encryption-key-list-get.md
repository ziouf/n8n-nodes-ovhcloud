# OVH Cloud Dbaas — List Archive Encryption Keys

> Opération `outputGraylogStreamArchiveEncryptionKeyListGet` · Fichier source : `nodes/OvhCloudDbaas/outputGraylogStream/outputGraylogStreamArchiveEncryptionKeyListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dbaas/logs/{param}{param}{param}` |

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
