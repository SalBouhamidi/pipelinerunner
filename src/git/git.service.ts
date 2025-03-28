import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as path from 'path';

@Injectable()
export class GitService {
  async createBranchAndPushFile(jsonFilePath: string): Promise<string> {
    try {
      const gitUserName = await this.executeCommand('git config user.name');
      const date = new Date();
      const formattedDate = `${String(date.getDate())}-${String(date.getMonth() + 1)}-${date.getFullYear()}-${String(date.getHours()).padStart(2, '0')}-${String(date.getMinutes()).padStart(2, '0')}`;
      const branchName = `feature/test/${gitUserName.trim()}-${formattedDate}`;
      const commands = [
        `git checkout main`,
        `git checkout -b ${branchName}`,
        `git add ${jsonFilePath}`,
        // `git mv ${jsonFilePath} cypress.env.json`,
        `git commit -m "add test report for ${jsonFilePath}"`,
        `git push -u origin ${branchName}`,
      ];

      for (const cmd of commands) {
        await this.executeCommand(cmd);
      }

      return branchName;
    } catch (e) {
      console.error('ops errorrr', e);
      throw new Error(`git operation failed ++++: ${e.message}`);
    }
  }

  private executeCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          console.warn(stderr);
        }
        resolve(stdout);
      });
    });
  }
}
