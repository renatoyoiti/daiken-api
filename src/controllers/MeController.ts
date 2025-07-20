
import { z } from 'zod';

import { eq } from 'drizzle-orm';
import { db } from '../db';
import { usersTable } from '../db/schema';
import { HttpResponse, ProtectedHttpRequest } from "../types/Http";
import { ok } from "../utils/http";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export class MeController {
  static async handle({ userId }: ProtectedHttpRequest): Promise<HttpResponse> {
    const user = await db.query.usersTable.findFirst({
      columns: {
        id: true,
        email: true,
        name: true,
        calories: true,
        proteins: true,
        carbohydrates: true,
        fats: true,
      },
      where: eq(usersTable.id, userId),
    });

    return ok({ user })
  }
};